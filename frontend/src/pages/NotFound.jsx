import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-xl text-center p-10 rounded-3xl bg-card border border-border">
        <p className="text-6xl">😵‍💫</p>
        <h1 className="mt-4 text-3xl font-extrabold text-text">
          Page Not Found
        </h1>
        <p className="mt-2 text-text/70">
          Ye page exist nahi karta. Home pe chalo.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}