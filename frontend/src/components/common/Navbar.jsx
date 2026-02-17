import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `
      px-4 py-2 rounded-2xl font-semibold transition
      ${
        isActive
          ? "bg-primary text-white shadow-sm"
          : "text-text/80 hover:text-text hover:bg-primary/10"
      }
    `;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between gap-6">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="StudyMega"
            className="h-9 w-9 object-contain"
          />
          <span className="text-xl font-extrabold text-text">
            Study<span className="text-primary">Mega</span>
          </span>
        </Link>

        {/* Center: Links */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/notes" className={navLinkClass}>
            Notes
          </NavLink>
          <NavLink to="/pyq" className={navLinkClass}>
            PYQ
          </NavLink>
          <NavLink to="/sample-papers" className={navLinkClass}>
            Sample Papers
          </NavLink>
          <NavLink to="/college" className={navLinkClass}>
            College Notes
          </NavLink>
          <NavLink to="/ai-planner" className={navLinkClass}>
            AI Planner
          </NavLink>
          <NavLink to="/syllabus" className={navLinkClass}>
            Syllabus
          </NavLink>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/register"
                className="
                  px-5 py-2.5 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                Register
              </Link>

              <Link
                to="/login"
                className="
                  px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition shadow-sm
                "
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="
                  px-5 py-2.5 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                {user.name || "Profile"}
              </Link>

              <button
                onClick={handleLogout}
                className="
                  px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition shadow-sm
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
