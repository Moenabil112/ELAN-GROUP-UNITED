import { DATA_ROOM_DOCUMENTS } from "@/data/dataRoom";
import DocumentCard from "./DocumentCard";

export default function DataRoomGateway() {
  return (
    <div className="doc-grid">
      {DATA_ROOM_DOCUMENTS.map((doc) => (
        <DocumentCard key={doc.id} doc={doc} />
      ))}
    </div>
  );
}
