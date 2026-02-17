import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="w-full py-16">
      <div className="w-full px-6 md:px-12">
        <div className="w-full p-10 rounded-[2rem] bg-primary text-white overflow-hidden relative">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Start studying smarter today 🚀
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Notes + PYQ + Sample Papers + AI Planner — everything in one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/notes"
                className="
                  px-7 py-3 rounded-2xl bg-white text-text font-extrabold
                  hover:-translate-y-1 hover:shadow-xl transition text-center
                "
              >
                Explore Notes
              </Link>

              <Link
                to="/ai-planner"
                className="
                  px-7 py-3 rounded-2xl bg-secondary text-white font-extrabold
                  hover:-translate-y-1 hover:shadow-xl transition text-center
                "
              >
                Use AI Planner
              </Link>
            </div>
          </div>

          {/* blobs */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
