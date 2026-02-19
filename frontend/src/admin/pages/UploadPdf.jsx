import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { uploadPdf } from "../../services/pdfApi";

export default function UploadPdf() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Notes");
  const [classLevel, setClassLevel] = useState("10");
  const [board, setBoard] = useState("CBSE");
  const [subject, setSubject] = useState("Maths");
  const [year, setYear] = useState("2025");
  const [medium, setMedium] = useState("English");
  const [pdfUrl, setPdfUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setTitle("");
    setCategory("Notes");
    setClassLevel("10");
    setBoard("CBSE");
    setSubject("Maths");
    setYear("2025");
    setMedium("English");
    setPdfUrl("");
    setThumbnailUrl("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return alert("Title required ❌");
    if (!pdfUrl.trim()) return alert("PDF URL required ❌");

    setLoading(true);

    try {
      await uploadPdf({
        title,
        category,
        classLevel,
        board,
        subject,
        year,
        medium,
        pdfUrl,
        thumbnailUrl:
          thumbnailUrl.trim() ||
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80",
        description,
      });

      alert("PDF Uploaded Successfully ✅");
      resetForm();
      navigate("/admin/manage-pdfs");
    } catch (err) {
      alert(err?.response?.data?.message || "Upload failed ❌");
    } finally {
      setLoading(false);
    }
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
            <h1 className="text-2xl md:text-3xl font-extrabold text-text">
              Upload PDF 📤
            </h1>
            <p className="mt-2 text-text/70">
              Add new Notes, PYQ, Sample Papers, Syllabus, College PDFs.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full p-6 rounded-3xl bg-card border border-border"
          >
            <h2 className="text-xl font-extrabold text-text">PDF Details ✍️</h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Title */}
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-text mb-2">Title</p>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Example: Class 10 Maths Chapter 1 Notes"
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
                  <option>Notes</option>
                  <option>PYQ</option>
                  <option>Sample Papers</option>
                  <option>Important</option>
                  <option>Syllabus</option>
                  <option>College</option>
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
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>UP Board</option>
                  <option>Bihar Board</option>
                  <option>MP Board</option>
                  <option>Other</option>
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
                  <option>Maths</option>
                  <option>Science</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Social Science</option>
                  <option>Computer</option>
                  <option>DSA</option>
                  <option>DBMS</option>
                  <option>Web Dev</option>
                </select>
              </div>

              {/* Year */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Year</p>
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="2025"
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
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
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>

              {/* PDF URL */}
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-text mb-2">PDF URL</p>
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
                  (Abhi URL paste karo. Later backend + storage add karenge)
                </p>
              </div>

              {/* Thumbnail URL */}
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-text mb-2">
                  Thumbnail URL (optional)
                </p>
                <input
                  value={thumbnailUrl}
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                  placeholder="https://image..."
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-text mb-2">
                  Description (optional)
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short description..."
                  rows={4}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition resize-none
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={loading}
                className="
                  flex-1 px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition shadow-sm
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {loading ? "Uploading..." : "Upload PDF"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="
                  flex-1 px-6 py-3 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                Reset
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin/manage-pdfs")}
                className="
                  flex-1 px-6 py-3 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                Manage PDFs
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
