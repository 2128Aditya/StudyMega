import { useParams, Link } from "react-router-dom";
import { PDFS } from "../../data/pdfs";

export default function PdfView() {
  const { id } = useParams();

  const pdf = PDFS.find((x) => String(x.id) === String(id));

  if (!pdf) {
    return (
      <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
        <h1 className="text-3xl font-extrabold text-text">PDF Not Found ❌</h1>
        <Link to="/" className="text-primary font-bold hover:underline">
          Go Home
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
      {/* Top */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-text/60">
            {pdf.board} • Class {pdf.classLevel} • {pdf.subject} • {pdf.medium}
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text mt-1">
            {pdf.title}
          </h1>
          <p className="mt-2 text-text/70">
            Pages: <b>{pdf.pages}</b> • Downloads: <b>{pdf.downloads}</b> •
            Uploaded: <b>{pdf.uploaded}</b>
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to={-1}
            className="
              px-6 py-3 rounded-2xl bg-background border border-border
              font-semibold text-text hover:bg-card transition
            "
          >
            Back
          </Link>

          <button
            onClick={() => alert("Download backend ke baad 😄")}
            className="
              px-6 py-3 rounded-2xl bg-primary text-white font-semibold
              hover:bg-secondary transition shadow-sm
            "
          >
            Download
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div className="mt-8 w-full rounded-3xl bg-card border border-border overflow-hidden">
        <div className="p-4 border-b border-border bg-background">
          <p className="text-sm text-text/70">
            PDF Viewer (demo). Backend connect hone ke baad real PDF show hoga.
          </p>
        </div>

        <div className="w-full h-[78vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-5xl">📄</p>
            <p className="mt-3 font-bold text-text">PDF Preview Coming Soon</p>
            <p className="mt-2 text-text/70 text-sm">
              Abhi dummy data hai. Real PDF link backend se aayega.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
