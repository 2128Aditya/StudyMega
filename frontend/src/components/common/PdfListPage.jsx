import { useEffect, useMemo, useState } from "react";
import PdfCard from "./PdfCard";
import { getAllPdfs } from "../../services/pdfApi";

export default function PdfListPage({ pageTitle, pageSubtitle, categoryName }) {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [classLevel, setClassLevel] = useState("All");
  const [board, setBoard] = useState("All");
  const [subject, setSubject] = useState("All");
  const [year, setYear] = useState("All");
  const [medium, setMedium] = useState("All");

  // Load from backend
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getAllPdfs();
        setPdfs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Category PDFs
  const categoryPdfs = useMemo(() => {
    return pdfs.filter((p) => p.category === categoryName);
  }, [pdfs, categoryName]);

  // Options
  const classOptions = useMemo(() => {
    const set = new Set(categoryPdfs.map((p) => p.classLevel));
    return ["All", ...Array.from(set)];
  }, [categoryPdfs]);

  const boardOptions = useMemo(() => {
    const set = new Set(categoryPdfs.map((p) => p.board));
    return ["All", ...Array.from(set)];
  }, [categoryPdfs]);

  const subjectOptions = useMemo(() => {
    const set = new Set(categoryPdfs.map((p) => p.subject));
    return ["All", ...Array.from(set)];
  }, [categoryPdfs]);

  const yearOptions = useMemo(() => {
    const set = new Set(categoryPdfs.map((p) => p.year));
    return ["All", ...Array.from(set)];
  }, [categoryPdfs]);

  const mediumOptions = useMemo(() => {
    const set = new Set(categoryPdfs.map((p) => p.medium));
    return ["All", ...Array.from(set)];
  }, [categoryPdfs]);

  // Filtered
  const filtered = useMemo(() => {
    return categoryPdfs.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.subject.toLowerCase().includes(search.toLowerCase()) ||
        p.board.toLowerCase().includes(search.toLowerCase());

      const matchClass = classLevel === "All" ? true : p.classLevel === classLevel;
      const matchBoard = board === "All" ? true : p.board === board;
      const matchSubject = subject === "All" ? true : p.subject === subject;
      const matchYear = year === "All" ? true : p.year === year;
      const matchMedium = medium === "All" ? true : p.medium === medium;

      return (
        matchSearch &&
        matchClass &&
        matchBoard &&
        matchSubject &&
        matchYear &&
        matchMedium
      );
    });
  }, [categoryPdfs, search, classLevel, board, subject, year, medium]);

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
      {/* Header */}
      <div className="w-full">
        <p className="text-sm text-text/60">StudyMega</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-text">
          {pageTitle}
        </h1>
        <p className="mt-2 text-text/70 text-lg">{pageSubtitle}</p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="mt-10 w-full p-12 rounded-3xl bg-card border border-border text-center">
          <p className="text-5xl">⏳</p>
          <h2 className="mt-4 text-2xl font-extrabold text-text">
            Loading PDFs...
          </h2>
          <p className="mt-2 text-text/70">
            Backend se data aa raha hai.
          </p>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="mt-8 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold text-text mb-2">Search</p>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search title, subject, board..."
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
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
                  {classOptions.map((c) => (
                    <option key={c} value={c}>
                      {c === "All" ? "All" : c === "College" ? "College" : `Class ${c}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Board */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Board</p>
                <select
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                >
                  {boardOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Subject</p>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                >
                  {subjectOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Year</p>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                >
                  {yearOptions.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              {/* Medium */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Medium</p>
                <select
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                >
                  {mediumOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results line */}
            <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm text-text/70">
                Showing <b className="text-text">{filtered.length}</b> PDFs
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setClassLevel("All");
                  setBoard("All");
                  setSubject("All");
                  setYear("All");
                  setMedium("All");
                }}
                className="
                  px-5 py-2.5 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-8 w-full">
            {filtered.length === 0 ? (
              <div className="w-full p-12 rounded-3xl bg-card border border-border text-center">
                <p className="text-5xl">📄</p>
                <h2 className="mt-4 text-2xl font-extrabold text-text">
                  No PDFs Found
                </h2>
                <p className="mt-2 text-text/70">
                  Admin ne abhi is category me PDF upload nahi kiya hai.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((pdf) => (
                  <PdfCard key={pdf._id} pdf={pdf} />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}