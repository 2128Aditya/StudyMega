import { useState } from "react";
import { uploadPdf } from "../../services/pdfApi";
import { getDriveDownloadLink } from "../../utils/drive";

const DEFAULT_THUMB =
  "https://cdn-icons-png.flaticon.com/512/337/337946.png";

export default function UploadPdf() {
  const [form, setForm] = useState({
    title: "",
    category: "notes",
    subject: "",
    className: "",
    pdfUrl: "",
    thumbnail: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) return alert("Title is required");
    if (!form.pdfUrl.trim()) return alert("PDF Link is required");

    // ✅ convert drive share link → direct download
    const finalPdfUrl = getDriveDownloadLink(form.pdfUrl.trim());

    // thumbnail fallback
    const finalThumb = form.thumbnail.trim() ? form.thumbnail.trim() : "";

    const payload = {
      title: form.title.trim(),
      category: form.category,
      subject: form.subject.trim(),
      className: form.className.trim(),
      pdfUrl: finalPdfUrl,
      thumbnail: finalThumb,
      description: form.description.trim(),
    };

    try {
      setLoading(true);

      await uploadPdf(payload);

      alert("✅ PDF Added Successfully!");

      setForm({
        title: "",
        category: "notes",
        subject: "",
        className: "",
        pdfUrl: "",
        thumbnail: "",
        description: "",
      });
    } catch (err) {
      alert(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 py-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-text">
            Upload PDF (Drive Link) 📤
          </h1>
          <p className="mt-2 text-text/70">
            Paste Google Drive link and StudyMega will auto-generate download
            link.
          </p>
        </div>

        {/* Card */}
        <div className="w-full bg-card rounded-3xl border border-border shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5">
            {/* Title */}
            <div>
              <label className="text-sm font-bold text-text">Title *</label>
              <input
                className="mt-2 w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
                placeholder="e.g. Class 10 Science Chapter 1 Notes"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-bold text-text">Category *</label>
              <select
                className="mt-2 w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="notes">Notes</option>
                <option value="pyq">PYQ</option>
                <option value="sample-papers">Sample Papers</option>
                <option value="important">Important</option>
                <option value="syllabus">Syllabus</option>
                <option value="college">College</option>
              </select>
            </div>

            {/* Subject + Class */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-bold text-text">Subject</label>
                <input
                  className="mt-2 w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
                  placeholder="e.g. Science, Maths, DSA"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-bold text-text">Class</label>
                <input
                  className="mt-2 w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
                  placeholder="e.g. Class 12, B.Tech Sem 4"
                  name="className"
                  value={form.className}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PDF Link */}
            <div>
              <label className="text-sm font-bold text-text">
                PDF Google Drive Link *
              </label>
              <input
                className="mt-2 w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
                placeholder="https://drive.google.com/file/d/..."
                name="pdfUrl"
                value={form.pdfUrl}
                onChange={handleChange}
                required
              />

              <p className="mt-2 text-xs text-text/60">
                Tip: Drive link ko “Anyone with link” access pe set karna.
              </p>
            </div>

            {/* Thumbnail */}
            <div>
              <label className="text-sm font-bold text-text">
                Thumbnail (optional)
              </label>
              <input
                className="mt-2 w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200"
                placeholder="Paste image URL (optional)"
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
              />

              <div className="mt-4 flex items-center gap-4">
                <img
                  src={form.thumbnail.trim() ? form.thumbnail : DEFAULT_THUMB}
                  alt=""
                  className="w-16 h-16 rounded-2xl border border-border bg-background object-contain p-2"
                />
                <p className="text-sm text-text/70">
                  Preview thumbnail (अगर blank रहेगा तो default icon show होगा)
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-bold text-text">
                Description (optional)
              </label>
              <textarea
                className="mt-2 w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none focus:ring-4 focus:ring-purple-200 min-h-[110px]"
                placeholder="Short description about this PDF..."
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button
              disabled={loading}
              className="w-full px-6 py-3 rounded-2xl bg-primary text-white font-extrabold hover:bg-secondary transition shadow-sm disabled:opacity-60"
            >
              {loading ? "Uploading..." : "Add PDF"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}