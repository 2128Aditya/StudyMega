import { Link, useParams } from "react-router-dom";
import { ROADMAPS } from "../../data/roadmaps";

export default function RoadmapDetail() {
  const { id } = useParams();

  const roadmap = ROADMAPS.find((r) => r.id === id);

  if (!roadmap) {
    return (
      <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
        <h1 className="text-3xl font-extrabold text-text">Roadmap Not Found ❌</h1>
        <Link to="/roadmaps" className="text-primary font-bold hover:underline">
          Go Back
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background">
      {/* Top */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-text/60">StudyMega Roadmap</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text">
            {roadmap.title}
          </h1>
          <p className="mt-2 text-text/70 text-lg">{roadmap.desc}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
              {roadmap.level}
            </span>

            <span className="text-xs px-3 py-1 rounded-full bg-background text-text font-bold border border-border">
              Duration: {roadmap.duration}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            to="/roadmaps"
            className="
              px-6 py-3 rounded-2xl bg-background border border-border
              font-semibold text-text hover:bg-card transition
            "
          >
            Back
          </Link>

          <Link
            to="/ai-planner"
            className="
              px-6 py-3 rounded-2xl bg-primary text-white font-semibold
              hover:bg-secondary transition shadow-sm
            "
          >
            Generate AI Plan
          </Link>
        </div>
      </div>

      {/* Steps */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {roadmap.steps.map((step, index) => (
          <div
            key={step.title}
            className="
              w-full p-6 rounded-3xl bg-card border border-border
              hover:shadow-xl hover:-translate-y-1 transition-all duration-200
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-text/60">Step {index + 1}</p>
                <h2 className="mt-1 text-xl font-extrabold text-text">
                  {step.title}
                </h2>
              </div>

              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border flex items-center justify-center text-xl">
                ✅
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {step.points.map((p) => (
                <div
                  key={p}
                  className="p-4 rounded-2xl bg-background border border-border"
                >
                  <p className="font-semibold text-text">• {p}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 w-full p-10 rounded-[2rem] bg-primary text-white overflow-hidden relative">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Follow this roadmap daily 🚀
        </h2>
        <p className="mt-3 text-white/90 text-lg">
          Agar tum chaho to AI Planner is roadmap ke basis pe day-wise schedule
          bana dega.
        </p>

        <div className="mt-7">
          <Link
            to="/ai-planner"
            className="
              inline-flex px-7 py-3 rounded-2xl bg-white text-text font-extrabold
              hover:-translate-y-1 hover:shadow-xl transition
            "
          >
            Create AI Schedule
          </Link>
        </div>

        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>
    </main>
  );
}
