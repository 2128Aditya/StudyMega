import { useMemo, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const DUMMY_PDFS = [
  {
    id: 1001,
    title: "Class 10 Maths - Chapter 1 Notes",
    category: "Notes",
    board: "CBSE",
    class: "10",
    subject: "Maths",
    medium: "English",
    year: "2026",
    downloads: 540,
    uploaded: "2026-02-15",
  },
  {
    id: 1002,
    title: "Class 10 Science - Important Questions",
    category: "Important Questions",
    board: "CBSE",
    class: "10",
    subject: "Science",
    medium: "Hindi",
    year: "2026",
    downloads: 2400,
    uploaded: "2026-02-14",
  },
  {
    id: 1003,
    title: "Class 12 Physics - PYQ (2020-2025)",
    category: "PYQ",
    board: "CBSE",
    class: "12",
    subject: "Physics",
    medium: "English",
    year: "2026",
    downloads: 1800,
    uploaded: "2026-02-16",
  },
  {
    id: 1004,
    title: "Class 9 UP Board - Syllabus (2025-26)",
    category: "Syllabus",
    board: "UP Board",
    class: "9",
    subject: "All Subjects",
    medium: "Hindi",
    year: "2026",
    downloads: 620,
    uploaded: "2026-02-12",
  },
  {
    id: 1005,
    title: "B.Tech DSA - Unit 1 Notes",
    category: "College",
    board: "University",
    class: "College",
    subject: "DSA",
    medium: "English",
    year: "2026",
    downloads: 2700,
    uploaded: "2026-02-17",
  },
];

export default function ManagePdfs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [board, setBoard] = useState("all");
  const [classLevel, setClassLevel] = useState("all");
  const [medium, setMedium] = useState("all");

  const [data, setData] = useState(DUMMY_PDFS);

  const filtered = useMemo(() => {
    let list = [...data];

    // search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((x) =>
        `${x.title} ${x.category} ${x.board} ${x.class} ${x.subject} ${x.medium}`
          .toLowerCase()
          .includes(q)
      );
    }

    // filters
    if (category !== "all") list = list.filter((x) => x.category === category);
    if (board !== "all") list = list.filter((x) => x.board === board);
    if (classLevel !== "all") list = list.filter((x) => x.class === classLevel);
    if (medium !== "all") list = list.filter((x) => x.medium === medium);

    return list;
  }, [data, query, category, board, classLevel, medium]);

  const deletePdf = (id) => {
    const ok = confirm("Are you sure you want to delete this PDF? ❌");
    if (!ok) return;

    setData((prev) => prev.filter((x) => x.id !== id));
    alert("PDF Deleted (Demo) ✅");
  };

  const reset = () => {
    setQuery("");
    setCategory("all");
    setBoard("all");
    setClassLevel("all");
    setMedium("all");
  };

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
            <h1 className="mt-1 text-2xl md:text-3xl font-extrabold text-text">
              Manage PDFs 📚
            </h1>
            <p className="mt-2 text-text/70">
              Search, filter, edit and delete PDFs.
            </p>
          </div>

          {/* Controls */}
          <div className="mt-6 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Search */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">
                  Search PDFs
                </p>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, subject, board..."
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
              </div>

              {/* Quick buttons */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">
                  Quick Actions
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={reset}
                    className="
                      px-6 py-3 rounded-2xl bg-background border border-border
                      font-semibold text-text hover:bg-card transition
                    "
                  >
                    Reset
                  </button>

                  <button
                    onClick={() => alert("Export feature later 😄")}
                    className="
                      px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                      hover:bg-secondary transition shadow-sm
                    "
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full px-4 py-3 rounded-2xl bg-background border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              >
                <option value="all">All Categories</option>
                <option>Notes</option>
                <option>PYQ</option>
                <option>Sample Papers</option>
                <option>Important Questions</option>
                <option>Syllabus</option>
                <option>College</option>
              </select>

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
            </div>

            {/* Result count */}
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-text/70">
                Showing <b className="text-text">{filtered.length}</b> PDFs
              </p>

              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
                Admin View
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="mt-6 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] border border-border rounded-2xl overflow-hidden">
                <thead className="bg-background">
                  <tr className="text-left">
                    <th className="p-4 text-sm font-bold text-text">Title</th>
                    <th className="p-4 text-sm font-bold text-text">Category</th>
                    <th className="p-4 text-sm font-bold text-text">Board</th>
                    <th className="p-4 text-sm font-bold text-text">Class</th>
                    <th className="p-4 text-sm font-bold text-text">Subject</th>
                    <th className="p-4 text-sm font-bold text-text">Medium</th>
                    <th className="p-4 text-sm font-bold text-text">Downloads</th>
                    <th className="p-4 text-sm font-bold text-text">Uploaded</th>
                    <th className="p-4 text-sm font-bold text-text">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((pdf) => (
                    <tr
                      key={pdf.id}
                      className="border-t border-border hover:bg-background transition"
                    >
                      <td className="p-4 text-text font-semibold">
                        {pdf.title}
                      </td>

                      <td className="p-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
                          {pdf.category}
                        </span>
                      </td>

                      <td className="p-4 text-text/70">{pdf.board}</td>
                      <td className="p-4 text-text/70">{pdf.class}</td>
                      <td className="p-4 text-text/70">{pdf.subject}</td>
                      <td className="p-4 text-text/70">{pdf.medium}</td>
                      <td className="p-4 text-text/70">{pdf.downloads}</td>
                      <td className="p-4 text-text/70">{pdf.uploaded}</td>

                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => alert("Edit feature next step 😄")}
                            className="
                              px-4 py-2 rounded-2xl bg-background border border-border
                              font-semibold text-text hover:bg-card transition
                            "
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deletePdf(pdf.id)}
                            className="
                              px-4 py-2 rounded-2xl bg-primary text-white font-semibold
                              hover:bg-secondary transition
                            "
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={9} className="p-10 text-center">
                        <p className="text-lg font-bold text-text">
                          No PDFs found 😢
                        </p>
                        <p className="mt-2 text-text/70">
                          Try changing search or filters.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 p-6 rounded-3xl bg-primary/10 border border-border">
            <p className="font-bold text-text">🔥 Next Step</p>
            <p className="mt-2 text-text/70">
              Next we will add <b>Edit PDF modal</b> and connect backend.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
