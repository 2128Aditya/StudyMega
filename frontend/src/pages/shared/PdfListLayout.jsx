import { useMemo, useState } from "react";
import PdfCard from "../../components/common/PdfCard";
import { PDFS } from "../../data/pdfs";

export default function PdfListLayout({ pageTitle, pageSubtitle, type }) {
  const [query, setQuery] = useState("");
  const [board, setBoard] = useState("all");
  const [classLevel, setClassLevel] = useState("all");
  const [medium, setMedium] = useState("all");
  const [subject, setSubject] = useState("all");

  const list = useMemo(() => {
    let data = PDFS.filter((x) => x.type === type);

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter((x) =>
        `${x.title} ${x.subject} ${x.board} ${x.classLevel} ${x.medium}`
          .toLowerCase()
          .includes(q)
      );
    }

    // Filters
    if (board !== "all") data = data.filter((x) => x.board === board);
    if (classLevel !== "all")
      data = data.filter((x) => x.classLevel === classLevel);
    if (medium !== "all") data = data.filter((x) => x.medium === medium);
    if (subject !== "all") data = data.filter((x) => x.subject === subject);

    return data;
  }, [type, query, board, classLevel, medium, subject]);

  const reset = () => {
    setQuery("");
    setBoard("all");
    setClassLevel("all");
    setMedium("all");
    setSubject("all");
  };

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

      {/* Controls */}
      <div className="mt-8 w-full p-6 rounded-3xl bg-card border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Search */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-text mb-2">
              Search PDFs
            </p>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, subject, class..."
              className="
                w-full px-4 py-3 rounded-2xl bg-background border border-border
                outline-none transition
                focus:ring-4 focus:ring-primary/20 focus:border-primary
              "
            />
          </div>

          {/* Reset */}
          <div>
            <p className="text-sm font-semibold text-text mb-2">Quick Action</p>
            <button
              onClick={reset}
              className="
                w-full px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                hover:bg-secondary transition shadow-sm
              "
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <select
            value={board}
            onChange={(e) => setBoard(e.target.value)}
            className="
              w-full px-4 py-3 rounded-2xl bg-background border border-border
              outline-none transition
              focus:ring-4 focus:ring-primary/20 focus:border-primary
            "
          >
            <option value="all">All Boards</option>
            <option>CBSE</option>
            <option>UP Board</option>
            <option>ICSE</option>
            <option>State Board</option>
            <option>University</option>
          </select>

          <select
            value={classLevel}
            onChange={(e) => setClassLevel(e.target.value)}
            className="
              w-full px-4 py-3 rounded-2xl bg-background border border-border
              outline-none transition
              focus:ring-4 focus:ring-primary/20 focus:border-primary
            "
          >
            <option value="all">All Classes</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
            <option value="College">College</option>
          </select>

          <select
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="
              w-full px-4 py-3 rounded-2xl bg-background border border-border
              outline-none transition
              focus:ring-4 focus:ring-primary/20 focus:border-primary
            "
          >
            <option value="all">All Medium</option>
            <option>English</option>
            <option>Hindi</option>
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="
              w-full px-4 py-3 rounded-2xl bg-background border border-border
              outline-none transition
              focus:ring-4 focus:ring-primary/20 focus:border-primary
            "
          >
            <option value="all">All Subjects</option>
            <option>Maths</option>
            <option>Science</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>English</option>
            <option>Hindi</option>
            <option>DSA</option>
            <option>DBMS</option>
            <option>Web Dev</option>
          </select>
        </div>

        {/* Result */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-text/70">
            Showing <b className="text-text">{list.length}</b> PDFs
          </p>

          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
            Class 6 → Graduation
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8">
        {list.length === 0 ? (
          <div className="w-full p-12 rounded-3xl bg-card border border-border text-center">
            <h2 className="text-2xl font-extrabold text-text">
              No PDFs Found 😢
            </h2>
            <p className="mt-2 text-text/70">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {list.map((pdf) => (
              <PdfCard key={pdf.id} pdf={pdf} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
