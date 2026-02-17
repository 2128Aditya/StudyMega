import { Link } from "react-router-dom";

const trending = [
  { title: "Class 10 Maths PYQ (2024)", meta: "CBSE • Maths • 2024" },
  { title: "Class 12 Physics Notes (Full)", meta: "CBSE • Physics • Notes" },
  { title: "Class 9 Science Important Questions", meta: "UP Board • Science • Important" },
  { title: "B.Tech DSA Notes (Semester 3)", meta: "College • DSA • Semester 3" },
];

export default function TrendingSection() {
  return (
    <section className="w-full border-y border-border">
      <div className="w-full px-6 md:px-12 py-14">
        <div className="flex items-end justify-between gap-5">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text">
              Trending Downloads 🔥
            </h2>
            <p className="text-text/70 mt-2">
              Most downloaded PDFs by students.
            </p>
          </div>

          <Link
            to="/notes"
            className="hidden md:inline-block text-sm font-semibold text-primary hover:underline"
          >
            Browse PDFs →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {trending.map((item, idx) => (
            <div
              key={idx}
              className="
                p-6 rounded-3xl bg-card border border-border
                hover:shadow-lg hover:-translate-y-1 transition-all duration-200
              "
            >
              <p className="text-lg font-bold text-text">{item.title}</p>
              <p className="mt-2 text-sm text-text/70">{item.meta}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-semibold border border-border">
                  Trending
                </span>

                <Link
                  to="/pdf/1"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View PDF →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
