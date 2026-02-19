import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPdfById, increaseDownload } from "../../services/pdfApi";

export default function PdfView() {
  const { id } = useParams();

  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getPdfById(id);
        setPdf(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleDownload = async () => {
    try {
      await increaseDownload(id);
      window.open(pdf.pdfUrl, "_blank");
    } catch (err) {
      window.open(pdf.pdfUrl, "_blank");
    }
  };

  if (loading) {
    return (
      <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
        <h1 className="text-3xl font-extrabold text-text">Loading PDF...</h1>
      </main>
    );
  }

  if (!pdf) {
    return (
      <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
        <h1 className="text-3xl font-extrabold text-text">
          PDF Not Found ❌
        </h1>
        <Link to="/" className="text-primary font-bold hover:underline">
          Go Home →
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-10 bg-background">
      {/* Header */}
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-text/60">{pdf.category}</p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text">
            {pdf.title}
          </h1>
          <p className="mt-2 text-text/70">
            Class {pdf.classLevel} • {pdf.board} • {pdf.subject} • {pdf.year}
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={pdf.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="
              px-6 py-3 rounded-2xl bg-primary text-white font-semibold
              hover:bg-secondary transition shadow-sm
            "
          >
            Open PDF
          </a>

          <button
            onClick={handleDownload}
            className="
              px-6 py-3 rounded-2xl bg-background border border-border
              font-semibold text-text hover:bg-card transition
            "
          >
            Download
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6">
        {/* Left */}
        <div className="w-full p-6 rounded-3xl bg-card border border-border">
          <img
            src={pdf.thumbnailUrl}
            alt={pdf.title}
            className="w-full h-56 rounded-3xl object-cover"
          />

          <div className="mt-5 space-y-3">
            <div className="p-4 rounded-2xl bg-background border border-border">
              <p className="text-xs text-text/60">Category</p>
              <p className="font-bold text-text">{pdf.category}</p>
            </div>

            <div className="p-4 rounded-2xl bg-background border border-border">
              <p className="text-xs text-text/60">Board</p>
              <p className="font-bold text-text">{pdf.board}</p>
            </div>

            <div className="p-4 rounded-2xl bg-background border border-border">
              <p className="text-xs text-text/60">Subject</p>
              <p className="font-bold text-text">{pdf.subject}</p>
            </div>

            <div className="p-4 rounded-2xl bg-background border border-border">
              <p className="text-xs text-text/60">Medium</p>
              <p className="font-bold text-text">{pdf.medium}</p>
            </div>

            <div className="p-4 rounded-2xl bg-background border border-border">
              <p className="text-xs text-text/60">Downloads</p>
              <p className="font-bold text-text">{pdf.downloads}</p>
            </div>
          </div>

          {pdf.description && (
            <div className="mt-5 p-5 rounded-3xl bg-primary/10 border border-border">
              <p className="font-bold text-text">Description</p>
              <p className="mt-2 text-sm text-text/70">{pdf.description}</p>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="w-full p-6 rounded-3xl bg-card border border-border">
          <h2 className="text-xl font-extrabold text-text">Preview 👇</h2>
          <p className="mt-2 text-text/70">
            Agar preview na aaye to “Open PDF” pe click karo.
          </p>

          <div className="mt-6 w-full h-[75vh] rounded-3xl overflow-hidden border border-border bg-background">
            <iframe title="PDF Preview" src={pdf.pdfUrl} className="w-full h-full" />
          </div>
        </div>
      </div>
    </main>
  );
}