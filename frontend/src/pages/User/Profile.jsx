import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-text/60">Account</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-text">
              Profile
            </h1>
            <p className="mt-2 text-text/70">
              Manage your account and saved resources.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/saved"
              className="
                px-6 py-3 rounded-2xl bg-background border border-border
                font-semibold text-text hover:bg-card transition text-center
              "
            >
              Saved PDFs
            </Link>

            <button
              onClick={handleLogout}
              className="
                px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                hover:bg-secondary transition shadow-sm
              "
            >
              Logout
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="p-8 rounded-3xl bg-card border border-border">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-border flex items-center justify-center text-xl font-extrabold text-primary">
                {user?.name?.[0]?.toUpperCase() || "U"}
              </div>

              <div>
                <p className="text-lg font-extrabold text-text">
                  {user?.name || "StudyMega User"}
                </p>
                <p className="text-sm text-text/70">{user?.email}</p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-xs text-text/60">Role</p>
                <p className="font-bold text-text">Student</p>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-xs text-text/60">Plan</p>
                <p className="font-bold text-text">Free</p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-3xl bg-primary/10 border border-border">
              <p className="font-bold text-text">🔥 Tip</p>
              <p className="mt-1 text-sm text-text/70">
                PDFs ko save karke tum 1 click me dubara access kar sakte ho.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-card border border-border">
            <h2 className="text-xl font-extrabold text-text">
              Quick Actions ⚡
            </h2>
            <p className="mt-2 text-text/70">
              Start learning from here.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/notes"
                className="
                  p-6 rounded-3xl bg-background border border-border
                  hover:bg-card hover:shadow-lg hover:-translate-y-1
                  transition-all duration-200
                "
              >
                <p className="text-lg font-extrabold text-text">Notes</p>
                <p className="mt-2 text-text/70">
                  Chapter-wise notes + PDFs
                </p>
              </Link>

              <Link
                to="/pyq"
                className="
                  p-6 rounded-3xl bg-background border border-border
                  hover:bg-card hover:shadow-lg hover:-translate-y-1
                  transition-all duration-200
                "
              >
                <p className="text-lg font-extrabold text-text">PYQ</p>
                <p className="mt-2 text-text/70">
                  Previous year papers + practice
                </p>
              </Link>

              <Link
                to="/ai-planner"
                className="
                  p-6 rounded-3xl bg-background border border-border
                  hover:bg-card hover:shadow-lg hover:-translate-y-1
                  transition-all duration-200
                "
              >
                <p className="text-lg font-extrabold text-text">AI Planner</p>
                <p className="mt-2 text-text/70">
                  Day-wise smart study plan
                </p>
              </Link>

              <Link
                to="/saved"
                className="
                  p-6 rounded-3xl bg-background border border-border
                  hover:bg-card hover:shadow-lg hover:-translate-y-1
                  transition-all duration-200
                "
              >
                <p className="text-lg font-extrabold text-text">Saved PDFs</p>
                <p className="mt-2 text-text/70">
                  Your saved study materials
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
