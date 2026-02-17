import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

export default function UploadPdf() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Notes");
  const [board, setBoard] = useState("CBSE");
  const [classLevel, setClassLevel] = useState("10");
  const [subject, setSubject] = useState("Maths");
  const [medium, setMedium] = useState("English");
  const [year, setYear] = useState("2026");
  const [tags, setTags] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return alert("Title required ❌");
    if (!pdfUrl.trim()) return alert("PDF URL required ❌");

    // Demo only (backend later)
    const payload = {
      title,
      category,
      board,
      class: classLevel,
      subject,
      medium,
      year,
      tags,
      pdfUrl,
    };

    console.log("UPLOAD PAYLOAD:", payload);

    alert("PDF Added (Demo) ✅\nBackend connect karne ke baad real upload hoga.");
    navigate("/admin/manage-pdfs");
  };

  const reset = () => {
    setTitle("");
    setCategory("Notes");
    setBoard("CBSE");
    setClassLevel("10");
    setSubject("Maths");
    setMedium("English");
    setYear("2026");
    setTags("");
    setPdfUrl("");
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
              Upload PDF ⬆️
            </h1>
            <p className="mt-2 text-text/70">
              Add notes, PYQ, sample papers, syllabus or college PDFs.
            </p>
          </div>

          {/* Content */}
          <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Form */}
            <div className="w-full p-6 rounded-3xl bg-card border border-border">
              <h2 className="text-xl font-extrabold text-text">
                PDF Details 📌
              </h2>
              <p className="mt-1 text-sm text-text/70">
                Fill details carefully so filters work correctly.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                {/* Title */}
                <div>
                  <p className="text-sm font-semibold text-text mb-2">Title</p>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Class 10 Maths Chapter 1 Notes"
                    className="
                      w-full px-4 py-3 rounded-2xl bg-background border border-border
                      outline-none transition
                      focus:ring-4 focus:ring-primary/20 focus:border-primary
                    "
                  />
                </div>

                {/* Category + Board */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text mb-2">
                      Category
                    </p>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="
                        w-full px-4 py-3 rounded-2xl bg-background border border-border
                        outline-none transition
                        focus:ring-4 focus:ring-primary/20 focus:border-primary
                      "
                    >
                      <option>Notes</option>
                      <option>PYQ</option>
                      <option>Sample Papers</option>
                      <option>Important Questions</option>
                      <option>Syllabus</option>
                      <option>College</option>
                    </select>
                  </div>

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
                      <option>CBSE</option>
                      <option>UP Board</option>
                      <option>ICSE</option>
                      <option>State Board</option>
                      <option>University</option>
                    </select>
                  </div>
                </div>

                {/* Class + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text mb-2">
                      Class / Level
                    </p>
                    <select
                      value={classLevel}
                      onChange={(e) => setClassLevel(e.target.value)}
                      className="
                        w-full px-4 py-3 rounded-2xl bg-background border border-border
                        outline-none transition
                        focus:ring-4 focus:ring-primary/20 focus:border-primary
                      "
                    >
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

                  <div>
                    <p className="text-sm font-semibold text-text mb-2">
                      Subject
                    </p>
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Maths / Science / DSA"
                      className="
                        w-full px-4 py-3 rounded-2xl bg-background border border-border
                        outline-none transition
                        focus:ring-4 focus:ring-primary/20 focus:border-primary
                      "
                    />
                  </div>
                </div>

                {/* Medium + Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text mb-2">
                      Medium
                    </p>
                    <select
                      value={medium}
                      onChange={(e) => setMedium(e.target.value)}
                      className="
                        w-full px-4 py-3 rounded-2xl bg-background border border-border
                        outline-none transition
                        focus:ring-4 focus:ring-primary/20 focus:border-primary
                      "
                    >
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text mb-2">Year</p>
                    <input
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="2026"
                      className="
                        w-full px-4 py-3 rounded-2xl bg-background border border-border
                        outline-none transition
                        focus:ring-4 focus:ring-primary/20 focus:border-primary
                      "
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-sm font-semibold text-text mb-2">
                    Tags (optional)
                  </p>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="e.g. chapter 1, board exam, unit 2"
                    className="
                      w-full px-4 py-3 rounded-2xl bg-background border border-border
                      outline-none transition
                      focus:ring-4 focus:ring-primary/20 focus:border-primary
                    "
                  />
                </div>

                {/* PDF URL */}
                <div>
                  <p className="text-sm font-semibold text-text mb-2">
                    PDF URL (Cloudinary / Drive)
                  </p>
                  <input
                    value={pdfUrl}
                    onChange={(e) => setPdfUrl(e.target.value)}
                    placeholder="https://..."
                    className="
                      w-full px-4 py-3 rounded-2xl bg-background border border-border
                      outline-none transition
                      focus:ring-4 focus:ring-primary/20 focus:border-primary
                    "
                  />
                  <p className="mt-2 text-xs text-text/60">
                    Abhi demo hai. Backend connect hone pe direct upload bhi add
                    karenge.
                  </p>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={reset}
                    className="
                      px-6 py-3 rounded-2xl bg-background border border-border
                      font-semibold text-text hover:bg-card transition
                    "
                  >
                    Reset
                  </button>

                  <button
                    type="submit"
                    className="
                      px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                      hover:bg-secondary transition shadow-sm
                    "
                  >
                    Add PDF
                  </button>
                </div>
              </form>
            </div>

            {/* Preview */}
            <div className="w-full p-6 rounded-3xl bg-card border border-border">
              <h2 className="text-xl font-extrabold text-text">
                Preview 👀
              </h2>
              <p className="mt-1 text-sm text-text/70">
                This is how your PDF will look on the student side.
              </p>

              <div className="mt-7 p-6 rounded-3xl bg-background border border-border">
                <p className="text-lg font-extrabold text-text">
                  {title || "PDF Title Preview"}
                </p>

                <p className="mt-2 text-sm text-text/70">
                  {board} • Class {classLevel} • {subject} • {medium}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-2xl bg-card border border-border">
                    <p className="text-text/60">Category</p>
                    <p className="font-semibold text-text">{category}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-card border border-border">
                    <p className="text-text/60">Year</p>
                    <p className="font-semibold text-text">{year}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs text-text/60">PDF URL</p>
                  <p className="text-sm text-text break-words mt-1">
                    {pdfUrl || "https://your-pdf-link-here"}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    className="
                      flex-1 px-4 py-3 rounded-2xl bg-primary text-white font-semibold
                      hover:bg-secondary transition
                    "
                  >
                    View
                  </button>

                  <button
                    type="button"
                    className="
                      px-4 py-3 rounded-2xl bg-card border border-border font-semibold
                      hover:bg-background transition text-text
                    "
                  >
                    Download
                  </button>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-3xl bg-primary/10 border border-border">
                <p className="font-bold text-text">🔥 Upload Tip</p>
                <p className="mt-1 text-sm text-text/70">
                  PDF ka title clean rakho, jaise:{" "}
                  <b>Class 10 Maths Chapter 1 Notes</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
