import { useEffect, useMemo, useState } from "react";
import { deletePdf, fetchPdfs } from "../../services/pdfApi";

const DEFAULT_THUMB =
  "https://cdn-icons-png.flaticon.com/512/337/337946.png";

export default function ManagePdfs() {
  const [loading, setLoading] = useState(true);
  const [pdfs, setPdfs] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const loadPdfs = async () => {
    try {
      setLoading(true);

      // category filter server side
      const data =
        category === "all" ? await fetchPdfs("") : await fetchPdfs(category);

      setPdfs(data);
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to load PDFs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPdfs();
    // eslint-disable-next-line
  }, [category]);

  const filtered = useMemo(() => {
    return pdfs.filter((p) => {
      if (!search.trim()) return true;

      return (
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.subject?.toLowerCase().includes(search.toLowerCase()) ||
        p.className?.toLowerCase().includes(search.toLowerCase()) ||
        p.category?.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [pdfs, search]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this PDF permanently?");
    if (!confirm) return;

    try {
      await deletePdf(id);
      alert("✅ PDF Deleted");

      // remove instantly
      setPdfs((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err?.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 py-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl font-extrabold text-text">
              Manage PDFs 🗂️
            </h1>
            <p className="mt-2 text-text/70">
              View, search and delete PDFs uploaded on StudyMega.
            </p>
          </div>

          <button
            onClick={loadPdfs}
            className="px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            🔄 Refresh
          </button>
        </div>

        {/* Filters */}
        <div className="mt-8 p-5 rounded-3xl bg-card border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title / subject / class..."
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            >
              <option value="all">All Categories</option>
              <option value="notes">Notes</option>
              <option value="pyq">PYQ</option>
              <option value="sample-papers">Sample Papers</option>
              <option value="important">Important</option>
              <option value="syllabus">Syllabus</option>
              <option value="college">College</option>
            </select>

            {/* Count */}
            <div className="px-4 py-3 rounded-2xl border border-border bg-background flex items-center font-bold text-text">
              Total: {filtered.length}
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="mt-10 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">⏳</p>
            <p className="mt-4 font-bold text-text">Loading PDFs...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-10 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">😕</p>
            <p className="mt-4 font-bold text-text">No PDFs found</p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
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

                <h3 className="mt-4 font-extrabold text-text line-clamp-2">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-text/70">
                  {p.category} • {p.subject || "-"} • {p.className || "-"}
                </p>

                <p className="mt-2 text-xs text-text/60">
                  Uploaded:{" "}
                  {p.createdAt
                    ? new Date(p.createdAt).toLocaleDateString()
                    : "-"}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-2xl bg-background border border-border font-semibold text-text hover:bg-card transition text-center"
                  >
                    Open
                  </a>

                  <button
                    onClick={() => handleDelete(p._id)}
                    className="flex-1 px-4 py-2.5 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}