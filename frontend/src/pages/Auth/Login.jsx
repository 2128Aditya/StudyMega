import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields 🙂");
      return;
    }

    login({ email });
    navigate("/");
  };

  return (
    <main className="w-full min-h-screen bg-background px-6 md:px-12 py-14 flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left */}
        <div className="w-full p-10 rounded-3xl bg-card border border-border">
          <div>
            <h1 className="text-3xl font-extrabold text-text">
              Welcome back 👋
            </h1>
            <p className="mt-2 text-text/70">
              Login to access PDFs, AI Planner and saved resources.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-semibold text-text mb-2">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                  w-full px-4 py-3 rounded-2xl bg-background border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-text mb-2">Password</p>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-sm font-semibold text-primary
                    hover:underline
                  "
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="
                w-full px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                hover:bg-secondary transition shadow-sm
              "
            >
              Login
            </button>

            <p className="text-sm text-text/70 text-center">
              Don’t have an account?{" "}
              <Link className="text-primary font-bold hover:underline" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>

        {/* Right */}
        <div className="w-full p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-background border border-border flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-text">
              Study smarter with StudyMega ✨
            </h2>

            <ul className="mt-6 space-y-3 text-text/70">
              <li>✅ Notes, PYQ, Sample Papers</li>
              <li>✅ College semester PDFs</li>
              <li>✅ AI Study Planner + Roadmaps</li>
              <li>✅ Save PDFs for later</li>
            </ul>
          </div>

          <div className="mt-10 p-5 rounded-3xl bg-card border border-border">
            <p className="font-bold text-text">🔥 Pro Tip</p>
            <p className="mt-1 text-sm text-text/70">
              Login karke tum apne favorite PDFs save kar sakte ho.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
