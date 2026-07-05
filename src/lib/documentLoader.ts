/**
 * محمّل وثائق غرفة البيانات — يعمل على الخادم فقط.
 * لا يقرأ إلا المسارات المسجلة في الفهرس (dataRoomIndex)،
 * فلا وصول لأي ملف خارج سجل المرحلة الأولى.
 */

import { promises as fs } from "fs";
import path from "path";
import { marked } from "marked";
import {
  DATA_ROOM_ALL_DOCUMENTS,
  DATA_ROOM_CONTENT_ROOT,
} from "@/data/dataRoomIndex";
import type { DataRoomDocumentEntry } from "@/types/dataRoom";

const CONTENT_DIR = path.join(process.cwd(), DATA_ROOM_CONTENT_ROOT);

/** إيجاد وثيقة بمعرفها ("01-01") — undefined إن لم تكن مسجلة */
export function getDocumentEntry(
  id: string
): DataRoomDocumentEntry | undefined {
  return DATA_ROOM_ALL_DOCUMENTS.find((d) => d.id === id);
}

/** قراءة نص الوثيقة الخام (Markdown) لوثيقة مسجلة */
export async function loadDocumentSource(
  entry: DataRoomDocumentEntry
): Promise<string> {
  const abs = path.join(CONTENT_DIR, entry.filePath);
  // حماية إضافية: المسار المطبع يجب أن يبقى داخل جذر المحتوى
  const normalized = path.normalize(abs);
  if (!normalized.startsWith(CONTENT_DIR)) {
    throw new Error(`Refusing to read outside content root: ${entry.filePath}`);
  }
  return fs.readFile(normalized, "utf8");
}

/** تحويل وثيقة مسجلة إلى HTML للعرض */
export async function loadDocumentHtml(
  entry: DataRoomDocumentEntry
): Promise<string> {
  const source = await loadDocumentSource(entry);
  return marked.parse(source, { async: false, gfm: true }) as string;
}
