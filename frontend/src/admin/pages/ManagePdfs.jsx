import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { deletePdf, getAllPdfs } from "../../services/pdfApi";

export default function ManagePdfs() {
  const navigate = useNavigate();

  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [classLevel, setClassLevel] = useState("All");

  // Load PDFs from backend
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getAllPdfs();
        setPdfs(data);
      } catch (err) {
        alert(err?.response?.data?.message || "Failed to load PDFs ❌");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // Delete PDF (backend)
  const handleDelete = async (id) => {
    const ok = confirm("Delete this PDF? ❌");
    if (!ok) return;

    try {
      setLoading(true);

      await deletePdf(id);

      // Refresh list
      const data = await getAllPdfs();
      setPdfs(data);

      alert("PDF Deleted ✅");
    } catch (err) {
      alert(err?.response?.data?.message || "Delete failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // Filtered list
  const filteredPdfs = useMemo(() => {
    return pdfs.filter((pdf) => {
      const matchSearch =
        pdf?.title?.toLowerCase().includes(search.toLowerCase()) ||
        pdf?.subject?.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === "All" ? true : pdf?.category === category;

      const matchClass =
        classLevel === "All" ? true : String(pdf?.classLevel) === classLevel;

      return matchSearch && matchCategory && matchClass;
    });
  }, [pdfs, search, category, classLevel]);

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-8 bg-background">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main */}
        <div className="w-full">
          {/* Header */}
          <div className="w-full p-6 rounded-3xl bg-card border border-border">
            <p className="text-sm text-text/60">Admin Panel</p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-text">
              Manage PDFs 📚
            </h1>
            <p className="mt-2 text-text/70">
              View, search and delete uploaded PDFs.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-6 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Search</p>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search title / subject..."
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
              </div>

              {/* Category */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Category</p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                >
                  <option value="All">All</option>
                  <option value="Notes">Notes</option>
                  <option value="PYQ">PYQ</option>
                  <option value="Sample Papers">Sample Papers</option>
                  <option value="Important">Important</option>
                  <option value="Syllabus">Syllabus</option>
                  <option value="College">College</option>
                </select>
              </div>

              {/* Class */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Class</p>
                <select
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                >
                  <option value="All">All</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                  <option value="College">College</option>
                </select>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="mt-6 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-extrabold text-text">All PDFs</h2>

              <button
                onClick={() => navigate("/admin/upload-pdf")}
                className="
                  px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition
                "
              >
                + Upload New
              </button>
            </div>

            {/* Loading */}
            {loading && (
              <p className="mt-6 text-text/70 font-semibold">Loading...</p>
            )}

            {/* Empty */}
            {!loading && filteredPdfs.length === 0 && (
              <p className="mt-6 text-text/70 font-semibold">
                No PDFs found ❌
              </p>
            )}

            {/* Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredPdfs.map((pdf) => (
                <div
                  key={pdf._id || pdf.id}
                  className="w-full p-5 rounded-3xl bg-background border border-border"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-text line-clamp-2">
                        {pdf.title}
                      </h3>
                      <p className="mt-1 text-sm text-text/70">
                        {pdf.subject} • {pdf.category} • Class {pdf.classLevel}
                      </p>
                    </div>

                    <button
                      disabled={loading}
                      onClick={() => handleDelete(pdf._id)}
                      className="
                        px-4 py-2 rounded-2xl bg-red-500 text-white font-semibold
                        hover:opacity-90 transition
                        disabled:opacity-60 disabled:cursor-not-allowed
                      "
                    >
                      Delete
                    </button>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 text-sm text-text/70">
                    <p>
                      <span className="font-semibold text-text">Board:</span>{" "}
                      {pdf.board}
                    </p>
                    <p>
                      <span className="font-semibold text-text">Medium:</span>{" "}
                      {pdf.medium}
                    </p>
                    <p>
                      <span className="font-semibold text-text">Year:</span>{" "}
                      {pdf.year}
                    </p>

                    {pdf.pdfUrl && (
                      <a
                        href={pdf.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-bold hover:underline"
                      >
                        Open PDF ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
