import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full border-b border-border bg-background">
      <div className="w-full px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-secondary text-sm font-semibold border border-border">
              📚 Class 6 → Graduation
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
              Notes, PYQ, Sample Papers &{" "}
              <span className="text-primary">AI Study Planner</span>
            </h1>

            <p className="mt-5 text-text/70 text-lg leading-relaxed">
              StudyMega helps students prepare smarter with high-quality PDFs,
              board-wise resources, and AI-generated study roadmaps.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/notes"
                className="
                  px-6 py-3 rounded-2xl bg-primary text-white font-semibold text-center
                  transition-all duration-200
                  hover:bg-secondary hover:-translate-y-1 hover:shadow-xl
                  active:translate-y-0 active:shadow-md
                "
              >
                Explore Notes
              </Link>

              <Link
                to="/ai-planner"
                className="
                  px-6 py-3 rounded-2xl bg-card text-text font-semibold text-center
                  border border-border
                  transition-all duration-200
                  hover:bg-background hover:-translate-y-1 hover:shadow-xl
                  active:translate-y-0 active:shadow-md
                "
              >
                Generate AI Plan
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { t: "6–12", d: "School Classes" },
                { t: "1000+", d: "PDF Resources" },
                { t: "AI", d: "Roadmaps" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="p-4 rounded-2xl bg-card border border-border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xl font-bold text-text">{x.t}</p>
                  <p className="text-sm text-text/70">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card/80 backdrop-blur p-8 shadow-sm">
              <h3 className="text-lg font-bold text-text">Quick Search 🔎</h3>
              <p className="text-sm text-text/70 mt-1">
                Search notes, PYQ, syllabus, sample papers instantly.
              </p>

              <div className="mt-5">
                <input
                  placeholder="Search by subject, class, year..."
                  className="
                    w-full px-4 py-3 rounded-2xl border border-border bg-card
                    outline-none transition-all duration-200
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { name: "Notes", path: "/notes" },
                  { name: "PYQ", path: "/pyq" },
                  { name: "Sample", path: "/sample-papers" },
                  { name: "College", path: "/college" },
                ].map((x) => (
                  <Link
                    key={x.name}
                    to={x.path}
                    className="
                      px-4 py-3 rounded-2xl bg-card border border-border
                      transition-all duration-200 text-center font-semibold text-text
                      hover:bg-background hover:-translate-y-1 hover:shadow-lg
                      active:translate-y-0 active:shadow-md
                    "
                  >
                    {x.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-primary text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <p className="font-bold">🔥 Pro Tip</p>
                <p className="text-sm opacity-90 mt-1">
                  Use AI Planner for a day-wise schedule before exams.
                </p>
              </div>

              {/* Images */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    className="h-28 w-full object-cover"
                    alt="Study desk"
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=60"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    className="h-28 w-full object-cover"
                    alt="Books"
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=60"
                  />
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -z-10 -top-10 -right-10 h-44 w-44 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute -z-10 -bottom-12 -left-10 h-44 w-44 rounded-full bg-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
