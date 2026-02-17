import { Link } from "react-router-dom";

const categories = [
  {
    title: "Notes",
    desc: "Chapter wise notes",
    icon: "📚",
    link: "/notes",
  },
  {
    title: "PYQ",
    desc: "Previous year papers",
    icon: "📝",
    link: "/pyq",
  },
  {
    title: "Sample Papers",
    desc: "Practice sets",
    icon: "📄",
    link: "/sample-papers",
  },
  {
    title: "Important",
    desc: "Most asked questions",
    icon: "⭐",
    link: "/important",
  },
  {
    title: "Syllabus",
    desc: "Latest syllabus PDFs",
    icon: "📌",
    link: "/syllabus",
  },
  {
    title: "College",
    desc: "Semester notes",
    icon: "🎓",
    link: "/college",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-14">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm text-text/60">Explore</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text">
              Categories 🚀
            </h2>
            <p className="mt-2 text-text/70">
              Choose what you want — everything is organized.
            </p>
          </div>

          <Link
            to="/notes"
            className="hidden md:inline-flex px-5 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            Browse All
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {categories.map((c) => (
            <Link
              key={c.title}
              to={c.link}
              className="
                w-full p-5 rounded-3xl bg-card border border-border
                hover:shadow-xl hover:-translate-y-1 transition-all duration-200
              "
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border flex items-center justify-center text-2xl">
                {c.icon}
              </div>

              <h3 className="mt-4 font-extrabold text-text">{c.title}</h3>
              <p className="mt-1 text-sm text-text/70">{c.desc}</p>

              <p className="mt-4 text-sm font-bold text-primary">
                Open →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-7 md:hidden">
          <Link
            to="/notes"
            className="inline-flex w-full justify-center px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            Browse All
          </Link>
        </div>
      </div>
    </section>
  );
}
