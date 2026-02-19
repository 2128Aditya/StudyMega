import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPdfs } from "../../../services/pdfApi";

const DEFAULT_THUMB =
  "https://cdn-icons-png.flaticon.com/512/337/337946.png";

export default function LatestUploadsSection() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        // all PDFs
        const data = await fetchPdfs("");

        // sort latest
        const sorted = [...data].sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        setPdfs(sorted.slice(0, 6));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section className="w-full py-16 bg-background border-b border-border">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text">
              Latest Uploads 🆕
            </h2>
            <p className="mt-2 text-text/70">
              Fresh PDFs uploaded recently by StudyMega.
            </p>
          </div>

          <Link
            to="/notes"
            className="px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            Explore All →
          </Link>
        </div>

        {loading ? (
          <div className="mt-8 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">⏳</p>
            <p className="mt-4 font-bold text-text">Loading latest PDFs...</p>
          </div>
        ) : pdfs.length === 0 ? (
          <div className="mt-8 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">😕</p>
            <p className="mt-4 font-bold text-text">No PDFs uploaded yet</p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfs.map((p) => (
              <Link
                to={`/pdf/${p._id}`}
                key={p._id}
                className="p-4 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition"
              >
                <div className="w-full h-44 rounded-2xl bg-background border border-border flex items-center justify-center overflow-hidden">
                  <img
                    src={p.thumbnail || DEFAULT_THUMB}
                    alt=""
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                <h3 className="mt-4 font-extrabold text-text text-lg leading-snug">
                  {p.title}
                </h3>

                <p className="text-sm text-text/70 mt-1">
                  {p.category} • {p.subject || "-"} • {p.className || "-"}
                </p>

                <p className="text-xs text-text/60 mt-2">
                  {p.createdAt
                    ? new Date(p.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}