import { Link } from "react-router-dom";

export default function PdfCard({ pdf }) {
  return (
    <Link
      to={`/pdf/${pdf._id}`}
      className="
        w-full rounded-3xl bg-card border border-border overflow-hidden
        hover:shadow-xl hover:-translate-y-1 transition-all duration-200
      "
    >
      <div className="w-full h-44 bg-background overflow-hidden">
        <img
          src={pdf.thumbnailUrl}
          alt={pdf.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
            {pdf.category}
          </span>

          <span className="text-xs text-text/60 font-semibold">
            {pdf.board}
          </span>
        </div>

        <h3 className="mt-3 font-extrabold text-text line-clamp-2">
          {pdf.title}
        </h3>

        <p className="mt-2 text-sm text-text/70">
          Class: <b className="text-text">{pdf.classLevel}</b> • Subject:{" "}
          <b className="text-text">{pdf.subject}</b>
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-text/60">
            Year: <b className="text-text">{pdf.year}</b>
          </p>

          <p className="text-xs text-text/60">
            Downloads: <b className="text-text">{pdf.downloads}</b>
          </p>
        </div>
      </div>
    </Link>
  );
}
