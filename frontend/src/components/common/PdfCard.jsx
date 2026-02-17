import { Link } from "react-router-dom";

export default function PdfCard({ pdf }) {
  return (
    <div
      className="
        w-full p-6 rounded-3xl bg-card border border-border
        hover:shadow-xl hover:-translate-y-1 transition-all duration-200
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-xs font-bold text-secondary bg-primary/10 inline-block px-3 py-1 rounded-full border border-border">
            {pdf.board} • Class {pdf.classLevel}
          </p>

          <h3 className="mt-4 text-lg font-extrabold text-text leading-snug">
            {pdf.title}
          </h3>

          <p className="mt-2 text-sm text-text/70">
            {pdf.subject} • {pdf.medium} • {pdf.pages} pages
          </p>
        </div>

        <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border flex items-center justify-center text-xl">
          📄
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-2xl bg-background border border-border">
          <p className="text-xs text-text/60">Downloads</p>
          <p className="font-bold text-text">{pdf.downloads}</p>
        </div>

        <div className="p-3 rounded-2xl bg-background border border-border">
          <p className="text-xs text-text/60">Uploaded</p>
          <p className="font-bold text-text">{pdf.uploaded}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <Link
          to={`/pdf/${pdf.id}`}
          className="
            flex-1 px-4 py-3 rounded-2xl bg-primary text-white font-semibold
            hover:bg-secondary transition text-center
          "
        >
          View
        </Link>

        <button
          onClick={() => alert("Download feature backend ke baad 😄")}
          className="
            px-4 py-3 rounded-2xl bg-background border border-border
            font-semibold text-text hover:bg-card transition
          "
        >
          Download
        </button>
      </div>
    </div>
  );
}
