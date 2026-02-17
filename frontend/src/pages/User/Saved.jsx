import { Link } from "react-router-dom";
import PdfCard from "../../components/common/PdfCard";

const DUMMY_SAVED = [
  {
    id: 9001,
    title: "Class 10 Maths - Chapter 1 Notes",
    class: "10",
    board: "CBSE",
    subject: "Maths",
    medium: "English",
    pages: 22,
    downloads: 540,
    uploaded: "2026-02-15",
  },
  {
    id: 9002,
    title: "Class 10 Science - Important Questions",
    class: "10",
    board: "CBSE",
    subject: "Science",
    medium: "Hindi",
    pages: 30,
    downloads: 2400,
    uploaded: "2026-02-14",
  },
  {
    id: 9003,
    title: "B.Tech DSA - Important Interview Questions",
    class: "College",
    board: "B.Tech",
    subject: "DSA",
    medium: "English",
    pages: 40,
    downloads: 1900,
    uploaded: "2026-02-17",
  },
];

export default function Saved() {
  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-12">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-text/60">Library</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-text">
              Saved PDFs
            </h1>
            <p className="mt-2 text-text/70">
              Your saved PDFs will appear here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/notes"
              className="
                px-6 py-3 rounded-2xl bg-background border border-border
                font-semibold text-text hover:bg-card transition text-center
              "
            >
              Explore Notes
            </Link>

            <Link
              to="/profile"
              className="
                px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                hover:bg-secondary transition shadow-sm text-center
              "
            >
              Profile
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10">
          {DUMMY_SAVED.length === 0 ? (
            <div className="p-10 rounded-3xl bg-card border border-border text-center">
              <h3 className="text-xl font-bold text-text">
                No saved PDFs yet 😢
              </h3>
              <p className="mt-2 text-text/70">
                Open any PDF and click Save.
              </p>
              <Link
                to="/notes"
                className="
                  inline-block mt-6 px-6 py-3 rounded-2xl bg-primary text-white
                  font-semibold hover:bg-secondary transition
                "
              >
                Explore Notes
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {DUMMY_SAVED.map((pdf) => (
                <PdfCard key={pdf.id} pdf={pdf} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
