import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields 🙂");
      return;
    }

    // Demo Admin Login (backend later)
    if (email === "admin@studymega.com" && password === "admin123") {
      localStorage.setItem("studymega_admin", "true");
      alert("Admin Login Successful ✅");
      navigate("/admin/dashboard");
      return;
    }

    alert("Invalid Admin Credentials ❌");
  };

  return (
    <main className="w-full min-h-screen bg-background px-6 md:px-12 py-14 flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left */}
        <div className="w-full p-10 rounded-3xl bg-card border border-border">
          <div>
            <p className="text-sm text-text/60">Admin Panel</p>
            <h1 className="mt-1 text-3xl font-extrabold text-text">
              Admin Login 🔐
            </h1>
            <p className="mt-2 text-text/70">
              Login to upload and manage StudyMega PDFs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-semibold text-text mb-2">
                Admin Email
              </p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@studymega.com"
                className="
                  w-full px-4 py-3 rounded-2xl bg-background border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-text mb-2">
                Admin Password
              </p>

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="admin123"
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
                    text-sm font-semibold text-primary hover:underline
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
              Login as Admin
            </button>

            <p className="text-sm text-text/70 text-center">
              Go back to{" "}
              <Link className="text-primary font-bold hover:underline" to="/">
                StudyMega Home
              </Link>
            </p>
          </form>
        </div>

        {/* Right */}
        <div className="w-full p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-background border border-border flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-text">
              Manage your platform 🚀
            </h2>

            <ul className="mt-6 space-y-3 text-text/70">
              <li>✅ Upload Notes / PYQ / Sample Papers</li>
              <li>✅ Manage categories</li>
              <li>✅ Track downloads</li>
              <li>✅ Keep syllabus updated</li>
            </ul>
          </div>

          <div className="mt-10 p-5 rounded-3xl bg-card border border-border">
            <p className="font-bold text-text">⚡ Demo Credentials</p>
            <p className="mt-1 text-sm text-text/70">
              Email: <b>admin@studymega.com</b> <br />
              Password: <b>admin123</b>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
