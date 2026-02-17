import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] w-full px-6 md:px-12 py-16 flex items-center justify-center">
      <div className="max-w-xl w-full p-10 rounded-3xl bg-card border border-border text-center">
        <h1 className="text-4xl font-extrabold text-text">404</h1>
        <p className="mt-3 text-text/70">
          Page not found. Let’s get you back to StudyMega.
        </p>

        <Link
          to="/"
          className="inline-block mt-7 px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
