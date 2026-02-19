import { Link } from "react-router-dom";

export default function TrendingSection() {
  const trending = [
    {
      title: "Class 10 Science Notes",
      to: "/notes",
      icon: "🔥",
    },
    {
      title: "Class 12 Board PYQ",
      to: "/pyq",
      icon: "📌",
    },
    {
      title: "Sample Papers (2024)",
      to: "/sample-papers",
      icon: "📝",
    },
    {
      title: "College Semester Notes",
      to: "/college",
      icon: "🎓",
    },
  ];

  return (
    <section className="w-full py-16 bg-card border-b border-border">
      <div className="w-full px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-text">
          Trending Resources 🚀
        </h2>
        <p className="mt-2 text-text/70">
          Most searched PDFs on StudyMega.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trending.map((t) => (
            <Link
              key={t.title}
              to={t.to}
              className="p-6 rounded-3xl bg-background border border-border shadow-sm hover:shadow-lg transition"
            >
              <p className="text-4xl">{t.icon}</p>
              <h3 className="mt-4 font-extrabold text-text">{t.title}</h3>
              <p className="mt-2 text-sm text-text/70">
                Tap to explore →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}