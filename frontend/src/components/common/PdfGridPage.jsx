import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPdfs } from "../../services/pdfApi";

const DEFAULT_THUMB =
  "https://cdn-icons-png.flaticon.com/512/337/337946.png";

export default function PdfGridPage({ title, category }) {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchPdfs(category);
        setPdfs(data);
      } catch (err) {
        alert(err?.response?.data?.message || "Failed to load PDFs");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [category]);

  const classOptions = useMemo(() => {
    const set = new Set();
    pdfs.forEach((p) => p.className && set.add(p.className));
    return Array.from(set).sort();
  }, [pdfs]);

  const subjectOptions = useMemo(() => {
    const set = new Set();
    pdfs.forEach((p) => p.subject && set.add(p.subject));
    return Array.from(set).sort();
  }, [pdfs]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return pdfs.filter((p) => {
      const matchSearch = q
        ? (p.title || "").toLowerCase().includes(q) ||
          (p.subject || "").toLowerCase().includes(q)
        : true;

      const matchClass = classFilter ? p.className === classFilter : true;
      const matchSubject = subjectFilter ? p.subject === subjectFilter : true;

      return matchSearch && matchClass && matchSubject;
    });
  }, [pdfs, search, classFilter, subjectFilter]);

  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 py-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-extrabold text-text">{title}</h1>
            <p className="mt-2 text-text/70">
              Search & download best PDFs for your exam.
            </p>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-card border border-border">
            <p className="text-sm text-text/60">Showing</p>
            <p className="text-lg font-extrabold text-primary">
              {filtered.length} PDFs
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 p-5 rounded-3xl bg-card border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title / subject..."
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
            />

            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            >
              <option value="">All Classes</option>
              {classOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            >
              <option value="">All Subjects</option>
              {subjectOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* List */}
        <div className="mt-6">
          {loading ? (
            <div className="p-10 rounded-3xl bg-card border border-border text-center">
              <p className="text-5xl">⏳</p>
              <p className="mt-4 font-bold text-text">Loading PDFs...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-10 rounded-3xl bg-card border border-border text-center">
              <p className="text-5xl">😕</p>
              <p className="mt-4 font-bold text-text">No PDFs found</p>
              <p className="mt-1 text-text/70">
                Try changing filters or search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
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

                  <h2 className="mt-4 font-extrabold text-text text-lg leading-snug">
                    {p.title}
                  </h2>

                  <p className="text-sm text-text/70 mt-1">
                    {p.subject || "-"} • {p.className || "-"}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase">
                      {p.category}
                    </span>
                    <span className="text-sm font-bold text-text">
                      View →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}