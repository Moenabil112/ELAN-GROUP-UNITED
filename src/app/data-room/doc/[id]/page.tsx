import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DATA_ROOM_ALL_DOCUMENTS, DATA_ROOM_BUNDLES } from "@/data/dataRoomIndex";
import { getDocumentEntry, loadDocumentHtml } from "@/lib/documentLoader";
import StatusBadge from "@/components/shared/StatusBadge";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export function generateStaticParams() {
  return DATA_ROOM_ALL_DOCUMENTS.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const entry = getDocumentEntry(id);
  return {
    title: entry
      ? `${entry.titleAr} — غرفة البيانات والمستندات`
      : "وثيقة غير موجودة",
  };
}

const PRIORITY_AR: Record<string, string> = {
  High: "أولوية عالية",
  Medium: "أولوية متوسطة",
  Standard: "أولوية قياسية",
};

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = getDocumentEntry(id);
  if (!entry) notFound();

  const bundle = DATA_ROOM_BUNDLES.find(
    (b) => b.bundleNumber === entry.bundleNumber
  )!;
  const html = await loadDocumentHtml(entry);

  return (
    <>
      <nav className="doc-breadcrumb" aria-label="مسار الوثيقة">
        <Link href="/data-room">غرفة البيانات والمستندات</Link>
        <span aria-hidden="true">←</span>
        <span>
          الحزمة {bundle.bundleNumber} — {bundle.bundleTitleAr}
        </span>
      </nav>

      <header className="doc-head">
        <h1>{entry.titleAr}</h1>
        <p className="doc-head__en num">{entry.title}</p>
        <div className="doc-head__badges">
          <StatusBadge tone="warn" labelAr="مسودة أولية" />
          <StatusBadge tone="neutral" labelAr="مراجعة مقيدة" />
          {entry.priority ? (
            <StatusBadge
              tone={entry.priority === "High" ? "high" : "neutral"}
              labelAr={PRIORITY_AR[entry.priority]}
            />
          ) : null}
          <StatusBadge tone="gold" labelAr={bundle.bundleTitleAr} />
        </div>
      </header>

      <article className="doc-content" dir="ltr">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </>
  );
}
