import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPdfById, fetchPdfs } from "../../services/pdfApi";
import { getDriveDownloadLink } from "../../utils/drive";

const DEFAULT_THUMB =
  "https://cdn-icons-png.flaticon.com/512/337/337946.png";

export default function PdfView() {
  const { id } = useParams();

  const [pdf, setPdf] = useState(null);
  const [similar, setSimilar] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await fetchPdfById(id);
        setPdf(data);

        // Similar PDFs
        if (data?.category) {
          const all = await fetchPdfs(data.category);
          const filtered = all.filter((x) => x._id !== data._id).slice(0, 6);
          setSimilar(filtered);
        }
      } catch (err) {
        alert(err?.response?.data?.message || "Failed to load PDF");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  // ✅ FIXED: direct download link
  const downloadUrl = useMemo(() => {
    if (!pdf?.pdfUrl) return "";
    return getDriveDownloadLink(pdf.pdfUrl);
  }, [pdf]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("✅ Link copied!");
    } catch (err) {
      alert("Copy failed");
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-background px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto p-10 rounded-3xl bg-card border border-border text-center">
          <p className="text-5xl">⏳</p>
          <p className="mt-4 font-bold text-text">Loading PDF...</p>
        </div>
      </div>
    );
  }

  if (!pdf) {
    return (
      <div className="w-full min-h-screen bg-background px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto p-10 rounded-3xl bg-card border border-border text-center">
          <p className="text-5xl">😕</p>
          <p className="mt-4 font-bold text-text">PDF not found</p>
          <Link
            to="/"
            className="inline-block mt-5 px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 py-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text/70 hover:text-primary transition"
            >
              ← Back to Home
            </Link>

            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-text">
              {pdf.title}
            </h1>

            <p className="mt-2 text-text/70">
              {pdf.category} • {pdf.subject || "-"} • {pdf.className || "-"}
            </p>

            {pdf.description && (
              <p className="mt-3 text-text/80 leading-relaxed max-w-3xl">
                {pdf.description}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={pdf.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
            >
              📖 Open PDF
            </a>

            <a
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-card border border-border font-semibold text-text hover:bg-background transition"
            >
              ⬇️ Download
            </a>

            <button
              onClick={handleCopy}
              className="px-5 py-2.5 rounded-2xl bg-card border border-border font-semibold text-text hover:bg-background transition"
            >
              🔗 Copy Link
            </button>
          </div>
        </div>

        {/* Main */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preview Card */}
          <div className="lg:col-span-2 p-6 rounded-3xl bg-card border border-border shadow-sm">
            <h2 className="text-xl font-extrabold text-text">PDF Preview</h2>
            <p className="text-sm text-text/70 mt-1">
              Preview is opened in a new tab for best experience.
            </p>

            <div className="mt-6 rounded-3xl border border-border bg-background p-6 flex flex-col md:flex-row gap-6 items-center">
              <img
                src={pdf.thumbnail || DEFAULT_THUMB}
                alt=""
                className="w-44 h-44 object-contain rounded-2xl bg-card border border-border p-4"
              />

              <div className="flex-1">
                <p className="font-extrabold text-text text-xl">{pdf.title}</p>

                <p className="mt-2 text-text/70">
                  Category:{" "}
                  <span className="font-bold text-text">{pdf.category}</span>
                </p>

                <p className="mt-1 text-text/70">
                  Subject:{" "}
                  <span className="font-bold text-text">
                    {pdf.subject || "-"}
                  </span>
                </p>

                <p className="mt-1 text-text/70">
                  Class:{" "}
                  <span className="font-bold text-text">
                    {pdf.className || "-"}
                  </span>
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={pdf.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
                  >
                    Open PDF →
                  </a>

                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-2xl bg-card border border-border font-semibold text-text hover:bg-background transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 rounded-3xl bg-card border border-border shadow-sm">
            <h2 className="text-xl font-extrabold text-text">Details</h2>

            <div className="mt-5 space-y-4">
              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-sm text-text/60">Category</p>
                <p className="font-extrabold text-text">{pdf.category}</p>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-sm text-text/60">Subject</p>
                <p className="font-extrabold text-text">
                  {pdf.subject || "-"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-sm text-text/60">Class</p>
                <p className="font-extrabold text-text">
                  {pdf.className || "-"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-sm text-text/60">Uploaded</p>
                <p className="font-extrabold text-text">
                  {pdf.createdAt
                    ? new Date(pdf.createdAt).toLocaleString()
                    : "-"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar */}
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-text">Similar PDFs ✨</h2>
          <p className="mt-2 text-text/70">More PDFs from same category.</p>

          {similar.length === 0 ? (
            <div className="mt-6 p-10 rounded-3xl bg-card border border-border text-center">
              <p className="text-5xl">📭</p>
              <p className="mt-4 font-bold text-text">No similar PDFs found</p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((p) => (
                <Link
                  to={`/pdf/${p._id}`}
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

                  <h3 className="mt-4 font-extrabold text-text text-lg leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-sm text-text/70 mt-1">
                    {p.subject || "-"} • {p.className || "-"}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}