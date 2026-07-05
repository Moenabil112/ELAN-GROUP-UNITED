/**
 * مسار ثابت لمحتوى وثائق غرفة البيانات — يُولّد وقت البناء
 * لكل وثيقة مسجلة في الفهرس، فيبقى النشر سكونياً بالكامل.
 */

import { NextResponse } from "next/server";
import { DATA_ROOM_ALL_DOCUMENTS } from "@/data/dataRoomIndex";
import { getDocumentEntry, loadDocumentHtml } from "@/lib/documentLoader";

export const dynamic = "force-static";

export function generateStaticParams() {
  return DATA_ROOM_ALL_DOCUMENTS.map((d) => ({ id: d.id }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const entry = getDocumentEntry(id);
  if (!entry) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const html = await loadDocumentHtml(entry);
  return NextResponse.json({ id: entry.id, html });
}
