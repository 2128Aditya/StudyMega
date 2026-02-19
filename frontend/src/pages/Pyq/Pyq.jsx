import { useEffect, useMemo, useState } from "react";
import PdfCard from "../../components/common/PdfCard";
import { fetchPdfs } from "../../services/pdfApi";

export default function Pyq() {
  const [loading, setLoading] = useState(true);
  const [pdfs, setPdfs] = useState([]);

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchPdfs("pyq");
        setPdfs(data);
      } catch (err) {
        alert(err?.response?.data?.message || "Failed to load PYQ");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const classList = useMemo(() => {
    const set = new Set();
    pdfs.forEach((p) => p.className && set.add(p.className));
    return ["all", ...Array.from(set)];
  }, [pdfs]);

  const subjectList = useMemo(() => {
    const set = new Set();
    pdfs.forEach((p) => p.subject && set.add(p.subject));
    return ["all", ...Array.from(set)];
  }, [pdfs]);

  const filtered = useMemo(() => {
    return pdfs.filter((p) => {
      const matchesSearch =
        !search.trim() ||
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.subject?.toLowerCase().includes(search.toLowerCase()) ||
        p.className?.toLowerCase().includes(search.toLowerCase());

      const matchesClass =
        classFilter === "all" || p.className === classFilter;

      const matchesSubject =
        subjectFilter === "all" || p.subject === subjectFilter;

      return matchesSearch && matchesClass && matchesSubject;
    });
  }, [pdfs, search, classFilter, subjectFilter]);

  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text">
            PYQ 📌
          </h1>
          <p className="mt-2 text-text/70">
            Previous Year Questions — Class 6 to Graduation.
          </p>
        </div>

        <div className="mt-8 p-5 rounded-3xl bg-card border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search PYQ by title / subject / class..."
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
            />

            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            >
              {classList.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All Classes" : c}
                </option>
              ))}
            </select>

            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            >
              {subjectList.map((s) => (
                <option key={s} value={s}>
                  {s === "all" ? "All Subjects" : s}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-4 text-sm text-text/60 font-semibold">
            Showing{" "}
            <span className="text-text font-extrabold">{filtered.length}</span>{" "}
            PDFs
          </p>
        </div>

        {loading ? (
          <div className="mt-10 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">⏳</p>
            <p className="mt-4 font-bold text-text">Loading PYQ...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-10 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">😕</p>
            <p className="mt-4 font-bold text-text">No PYQ found</p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PdfCard key={p._id} pdf={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}