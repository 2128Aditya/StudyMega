import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchPdfs } from "../../services/pdfApi";

const DEFAULT_THUMB =
  "https://cdn-icons-png.flaticon.com/512/337/337946.png";

export default function Search() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";

  const [loading, setLoading] = useState(true);
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        if (!query.trim()) {
          setPdfs([]);
          return;
        }

        const data = await searchPdfs(query.trim());
        setPdfs(data);
      } catch (err) {
        alert(err?.response?.data?.message || "Search failed");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [query]);

  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-text">
          Search Results 🔎
        </h1>

        <p className="mt-2 text-text/70">
          Showing results for:{" "}
          <span className="font-bold text-text">{query}</span>
        </p>

        {loading ? (
          <div className="mt-8 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">⏳</p>
            <p className="mt-4 font-bold text-text">Searching...</p>
          </div>
        ) : pdfs.length === 0 ? (
          <div className="mt-8 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">😕</p>
            <p className="mt-4 font-bold text-text">
              No PDFs found for "{query}"
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfs.map((p) => (
              <Link
                to={`/pdf/${p._id}`}
                key={p._id}
                className="p-4 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition"
              >
                <div className="w-full h-40 rounded-2xl bg-background border border-border flex items-center justify-center overflow-hidden">
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}