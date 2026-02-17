import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import StatCard from "../components/StatCard";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("studymega_admin");
    navigate("/admin/login");
  };

  // Dummy stats (backend later)
  const stats = [
    {
      title: "Total PDFs",
      value: "2,450",
      subtitle: "Notes, PYQ, sample papers, syllabus, college",
    },
    {
      title: "Total Downloads",
      value: "1.2M",
      subtitle: "Students downloaded resources overall",
    },
    {
      title: "Active Users",
      value: "18,320",
      subtitle: "Monthly active students (estimated)",
    },
    {
      title: "Uploads This Week",
      value: "84",
      subtitle: "New PDFs added recently",
    },
  ];

  const recentUploads = [
    {
      id: 101,
      title: "Class 10 Maths - Chapter 1 Notes",
      category: "Notes",
      uploaded: "2026-02-17",
    },
    {
      id: 102,
      title: "Class 12 Physics - Important Questions",
      category: "Important",
      uploaded: "2026-02-16",
    },
    {
      id: 103,
      title: "B.Tech DSA - Unit 2 Notes",
      category: "College",
      uploaded: "2026-02-15",
    },
    {
      id: 104,
      title: "Class 9 UP Board - Syllabus PDF",
      category: "Syllabus",
      uploaded: "2026-02-14",
    },
  ];

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-8 bg-background">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="w-full">
          {/* Topbar */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-card border border-border">
            <div>
              <p className="text-sm text-text/60">Admin Panel</p>
              <h1 className="text-2xl md:text-3xl font-extrabold text-text">
                Dashboard 📊
              </h1>
              <p className="mt-2 text-text/70">
                Manage PDFs, uploads and track performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/admin/upload"
                className="
                  px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition shadow-sm text-center
                "
              >
                Upload PDF
              </Link>

              <button
                onClick={handleLogout}
                className="
                  px-6 py-3 rounded-2xl bg-background border border-border
                  font-semibold text-text hover:bg-card transition
                "
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((s) => (
              <StatCard
                key={s.title}
                title={s.title}
                value={s.value}
                subtitle={s.subtitle}
              />
            ))}
          </div>

          {/* Recent Uploads + Quick Actions */}
          <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Recent Uploads */}
            <div className="xl:col-span-2 p-6 rounded-3xl bg-card border border-border">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-text">
                    Recent Uploads 📚
                  </h2>
                  <p className="mt-1 text-sm text-text/70">
                    Latest PDFs uploaded by admin.
                  </p>
                </div>

                <Link
                  to="/admin/manage-pdfs"
                  className="text-primary font-bold hover:underline"
                >
                  Manage →
                </Link>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[700px] border border-border rounded-2xl overflow-hidden">
                  <thead className="bg-background">
                    <tr className="text-left">
                      <th className="p-4 text-sm font-bold text-text">Title</th>
                      <th className="p-4 text-sm font-bold text-text">
                        Category
                      </th>
                      <th className="p-4 text-sm font-bold text-text">
                        Uploaded
                      </th>
                      <th className="p-4 text-sm font-bold text-text">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentUploads.map((r) => (
                      <tr
                        key={r.id}
                        className="border-t border-border hover:bg-background transition"
                      >
                        <td className="p-4 text-text font-semibold">
                          {r.title}
                        </td>
                        <td className="p-4">
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
                            {r.category}
                          </span>
                        </td>
                        <td className="p-4 text-text/70">{r.uploaded}</td>
                        <td className="p-4">
                          <button
                            onClick={() => alert("Edit feature next step 😄")}
                            className="
                              px-4 py-2 rounded-2xl bg-background border border-border
                              font-semibold text-text hover:bg-card transition
                            "
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-3xl bg-card border border-border">
              <h2 className="text-xl font-extrabold text-text">
                Quick Actions ⚡
              </h2>
              <p className="mt-1 text-sm text-text/70">
                Fast shortcuts for admin work.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/admin/upload"
                  className="
                    px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                    hover:bg-secondary transition shadow-sm text-center
                  "
                >
                  Upload New PDF
                </Link>

                <Link
                  to="/admin/manage-pdfs"
                  className="
                    px-6 py-3 rounded-2xl bg-background border border-border
                    font-semibold text-text hover:bg-card transition text-center
                  "
                >
                  Manage PDFs
                </Link>

                <Link
                  to="/admin/analytics"
                  className="
                    px-6 py-3 rounded-2xl bg-background border border-border
                    font-semibold text-text hover:bg-card transition text-center
                  "
                >
                  Analytics
                </Link>

                <Link
                  to="/"
                  className="
                    px-6 py-3 rounded-2xl bg-background border border-border
                    font-semibold text-text hover:bg-card transition text-center
                  "
                >
                  Back to Website
                </Link>
              </div>

              <div className="mt-6 p-5 rounded-3xl bg-primary/10 border border-border">
                <p className="font-bold text-text">🔥 Admin Tip</p>
                <p className="mt-1 text-sm text-text/70">
                  Upload PDF with correct Class, Board and Subject so filters work
                  perfectly.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-6 p-6 rounded-3xl bg-background border border-border">
            <p className="font-bold text-text">✅ Next Steps</p>
            <p className="mt-2 text-text/70">
              Next we will build:
              <b> Upload PDF page</b> + <b>Manage PDFs page</b> (with table +
              delete/edit UI).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
