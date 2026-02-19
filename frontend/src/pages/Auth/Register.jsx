import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await register({ name, email, password });
      alert("Account Created Successfully ✅");
      navigate("/");
    } catch (err) {
      alert(err?.response?.data?.message || "Register failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-12 bg-background flex items-center justify-center">
      <div className="w-full max-w-xl p-8 rounded-3xl bg-card border border-border shadow-sm">
        <h1 className="text-3xl font-extrabold text-text">Register 📝</h1>
        <p className="mt-2 text-text/70">
          Create account to access StudyMega resources.
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-4">
          <div>
            <p className="text-sm font-semibold text-text mb-2">Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-2xl bg-background border border-border outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-text mb-2">Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-2xl bg-background border border-border outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-text mb-2">Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              className="w-full px-4 py-3 rounded-2xl bg-background border border-border outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <button
            disabled={loading}
            className="w-full px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-text/70">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
