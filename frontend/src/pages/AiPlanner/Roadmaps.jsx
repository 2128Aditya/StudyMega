import { Link } from "react-router-dom";
import { ROADMAPS } from "../../data/roadmaps";

export default function Roadmaps() {
  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
      {/* Header */}
      <div className="w-full">
        <p className="text-sm text-text/60">StudyMega AI Tools</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-text">
          Roadmaps 🗺️
        </h1>
        <p className="mt-2 text-text/70 text-lg">
          Choose a roadmap and follow it step-by-step.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {ROADMAPS.map((r) => (
          <div
            key={r.id}
            className="
              w-full p-6 rounded-3xl bg-card border border-border
              hover:shadow-xl hover:-translate-y-1 transition-all duration-200
            "
          >
            <p className="text-xs font-bold text-secondary bg-primary/10 inline-block px-3 py-1 rounded-full border border-border">
              {r.level}
            </p>

            <h3 className="mt-4 text-lg font-extrabold text-text">
              {r.title}
            </h3>

            <p className="mt-2 text-sm text-text/70 leading-relaxed">
              {r.desc}
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-background border border-border">
              <p className="text-xs text-text/60">Estimated Time</p>
              <p className="font-bold text-text">{r.duration}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                to={`/roadmaps/${r.id}`}
                className="
                  flex-1 px-4 py-3 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition text-center
                "
              >
                Open
              </Link>

              <Link
                to="/ai-planner"
                className="
                  px-4 py-3 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                AI Plan
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 w-full p-10 rounded-[2rem] bg-primary text-white overflow-hidden relative">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Want a day-wise plan for any roadmap? 🤖
        </h2>
        <p className="mt-3 text-white/90 text-lg">
          Use AI Study Planner and generate a schedule instantly.
        </p>

        <div className="mt-7">
          <Link
            to="/ai-planner"
            className="
              inline-flex px-7 py-3 rounded-2xl bg-white text-text font-extrabold
              hover:-translate-y-1 hover:shadow-xl transition
            "
          >
            Generate AI Plan
          </Link>
        </div>

        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>
    </main>
  );
}
