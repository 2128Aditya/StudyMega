import { Link } from "react-router-dom";

const DEFAULT_THUMB =
  "https://cdn-icons-png.flaticon.com/512/337/337946.png";

export default function PdfCard({ pdf }) {
  return (
    <Link
      to={`/pdf/${pdf._id}`}
      className="
        w-full rounded-3xl bg-card border border-border overflow-hidden
        hover:shadow-xl hover:-translate-y-1 transition-all duration-200
      "
    >
      <div className="w-full h-44 bg-background overflow-hidden flex items-center justify-center">
        <img
          src={pdf.thumbnail || DEFAULT_THUMB}
          alt={pdf.title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
            {pdf.category}
          </span>

          <span className="text-xs text-text/60 font-semibold">
            {pdf.subject || "PDF"}
          </span>
        </div>

        <h3 className="mt-3 font-extrabold text-text line-clamp-2">
          {pdf.title}
        </h3>

        <p className="mt-2 text-sm text-text/70">
          Class:{" "}
          <b className="text-text">{pdf.className || "-"}</b> • Subject:{" "}
          <b className="text-text">{pdf.subject || "-"}</b>
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-text/60">
            Uploaded:{" "}
            <b className="text-text">
              {pdf.createdAt
                ? new Date(pdf.createdAt).toLocaleDateString()
                : "-"}
            </b>
          </p>

          <p className="text-xs text-text/60">
            ID: <b className="text-text">{pdf._id?.slice(-6)}</b>
          </p>
        </div>
      </div>
    </Link>
  );
}