import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill all fields 🙂");
      return;
    }

    register({ name, email });
    navigate("/");
  };

  return (
    <main className="w-full min-h-screen bg-background px-6 md:px-12 py-14 flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left */}
        <div className="w-full p-10 rounded-3xl bg-card border border-border">
          <div>
            <h1 className="text-3xl font-extrabold text-text">
              Create account 🚀
            </h1>
            <p className="mt-2 text-text/70">
              Join StudyMega to access premium study resources.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-semibold text-text mb-2">Full Name</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="
                  w-full px-4 py-3 rounded-2xl bg-background border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              />
            </div>

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
                  placeholder="Create password"
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
              Register
            </button>

            <p className="text-sm text-text/70 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-bold hover:underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Right */}
        <div className="w-full p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-background border border-border flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-text">
              Get everything in one place 📚
            </h2>

            <ul className="mt-6 space-y-3 text-text/70">
              <li>✅ Notes + PYQ + Sample Papers</li>
              <li>✅ College semester notes</li>
              <li>✅ AI Roadmaps</li>
              <li>✅ Save resources</li>
            </ul>
          </div>

          <div className="mt-10 p-5 rounded-3xl bg-card border border-border">
            <p className="font-bold text-text">✨ Premium Look</p>
            <p className="mt-1 text-sm text-text/70">
              Light UI + fast navigation for students.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
