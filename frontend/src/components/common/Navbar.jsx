import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [openAi, setOpenAi] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="w-full sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-primary text-white flex items-center justify-center font-extrabold">
            S
          </div>
          <div>
            <p className="font-extrabold text-text text-lg leading-none">
              StudyMega
            </p>
            <p className="text-xs text-text/60">Notes + PYQ + AI</p>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-text">
          <Link to="/notes" className="hover:text-primary transition">
            Notes
          </Link>
          <Link to="/pyq" className="hover:text-primary transition">
            PYQ
          </Link>
          <Link to="/sample-papers" className="hover:text-primary transition">
            Sample
          </Link>
          <Link to="/important" className="hover:text-primary transition">
            Important
          </Link>
          <Link to="/syllabus" className="hover:text-primary transition">
            Syllabus
          </Link>
          <Link to="/college" className="hover:text-primary transition">
            College
          </Link>

          {/* AI Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenAi(true)}
            onMouseLeave={() => setOpenAi(false)}
          >
            <button
              onClick={() => setOpenAi((p) => !p)}
              className="hover:text-primary transition flex items-center gap-2"
            >
              AI Tools <span className="text-sm">▾</span>
            </button>

            {openAi && (
              <div className="absolute top-10 left-0 w-56 p-2 rounded-3xl bg-card border border-border shadow-xl">
                <Link
                  to="/ai-planner"
                  className="block px-4 py-3 rounded-2xl hover:bg-background transition"
                >
                  🤖 AI Study Planner
                  <p className="text-xs text-text/60 mt-1">
                    Day-wise plan generator
                  </p>
                </Link>

                <Link
                  to="/roadmaps"
                  className="block px-4 py-3 rounded-2xl hover:bg-background transition"
                >
                  🗺️ Roadmaps
                  <p className="text-xs text-text/60 mt-1">
                    Full learning roadmaps
                  </p>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/login"
                className="
                  px-5 py-2.5 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                  px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition shadow-sm
                "
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {user.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="
                    px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold
                    hover:bg-secondary transition shadow-sm
                  "
                >
                  Admin Panel
                </Link>
              )}

              <button
                onClick={logout}
                className="
                  px-5 py-2.5 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}