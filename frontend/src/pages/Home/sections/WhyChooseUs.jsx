const points = [
  {
    title: "Clean & Organized PDFs",
    desc: "No random PDFs. Everything is categorized by class, board, subject and year.",
    icon: "🧠",
  },
  {
    title: "Fast Search + Filters",
    desc: "Find the exact notes/PYQ/sample paper in seconds.",
    icon: "⚡",
  },
  {
    title: "AI Study Planner",
    desc: "Get day-wise study roadmap + revision plan before exams.",
    icon: "🤖",
  },
  {
    title: "Free Downloads",
    desc: "StudyMega is built for students. Free resources for everyone.",
    icon: "💜",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-14 border-t border-border">
      <div className="w-full px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-text/60">Why StudyMega?</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-text">
            A Premium Study Experience ✨
          </h2>
          <p className="mt-3 text-text/70 text-lg">
            We want every student to study smarter, not harder.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="
                w-full p-6 rounded-3xl bg-card border border-border
                hover:shadow-xl hover:-translate-y-1 transition-all duration-200
              "
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border flex items-center justify-center text-2xl">
                {p.icon}
              </div>

              <h3 className="mt-4 font-extrabold text-text">{p.title}</h3>
              <p className="mt-2 text-sm text-text/70 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
