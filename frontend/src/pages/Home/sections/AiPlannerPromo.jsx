import { Link } from "react-router-dom";

export default function AiPlannerPromo() {
  return (
    <section className="w-full py-14 border-t border-border">
      <div className="w-full px-6 md:px-12">
        <div className="w-full rounded-[2rem] bg-card border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-8 md:p-10">
              <p className="text-sm text-text/60">AI Feature</p>

              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-text leading-tight">
                Generate Your{" "}
                <span className="text-primary">AI Study Planner</span> in 10 sec ⚡
              </h2>

              <p className="mt-4 text-text/70 text-lg">
                Tell AI your class, subject and exam date — it will create a
                day-wise roadmap + revision plan.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/ai-planner"
                  className="
                    px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                    hover:bg-secondary transition text-center
                  "
                >
                  Generate Plan
                </Link>

                <Link
                  to="/notes"
                  className="
                    px-6 py-3 rounded-2xl bg-background border border-border
                    font-semibold text-text hover:bg-card transition text-center
                  "
                >
                  Explore PDFs
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <p className="text-xl font-extrabold text-text">10s</p>
                  <p className="text-sm text-text/70">Plan Time</p>
                </div>

                <div className="p-4 rounded-2xl bg-background border border-border">
                  <p className="text-xl font-extrabold text-text">Daily</p>
                  <p className="text-sm text-text/70">Schedule</p>
                </div>

                <div className="p-4 rounded-2xl bg-background border border-border">
                  <p className="text-xl font-extrabold text-text">Smart</p>
                  <p className="text-sm text-text/70">Revision</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative p-8 md:p-10 bg-gradient-to-br from-primary/10 via-background to-card">
              <div className="w-full p-6 rounded-3xl bg-card border border-border shadow-sm">
                <p className="font-extrabold text-text">AI Planner Preview</p>
                <p className="mt-1 text-sm text-text/70">
                  Example plan for Class 10 Maths
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Day 1 → Chapter 1 + 20 Questions",
                    "Day 2 → Chapter 2 + PYQ",
                    "Day 3 → Sample Paper 1",
                    "Day 4 → Revision + Weak Topics",
                  ].map((x) => (
                    <div
                      key={x}
                      className="p-4 rounded-2xl bg-background border border-border"
                    >
                      <p className="font-semibold text-text">{x}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => alert("AI Planner page next 😄")}
                  className="
                    mt-6 w-full px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                    hover:bg-secondary transition
                  "
                >
                  Generate My Plan
                </button>
              </div>

              {/* blobs */}
              <div className="absolute -z-10 -top-10 -right-10 h-44 w-44 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -z-10 -bottom-12 -left-10 h-44 w-44 rounded-full bg-secondary/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
