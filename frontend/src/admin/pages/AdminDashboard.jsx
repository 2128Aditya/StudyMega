import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import StatCard from "../components/StatCard";
import { fetchAdminStats } from "../../services/adminApi";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchAdminStats();
        setStats(data);
      } catch (err) {
        alert(err?.response?.data?.message || "Failed to load stats");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-background flex">
      <AdminSidebar />

      <div className="flex-1 px-6 md:px-12 py-10">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-text">
          Admin Dashboard ⚡
        </h1>
        <p className="mt-2 text-text/70">
          Manage PDFs, track uploads and monitor StudyMega.
        </p>

        {/* Loading */}
        {loading ? (
          <div className="mt-10 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">⏳</p>
            <p className="mt-4 font-bold text-text">Loading stats...</p>
          </div>
        ) : !stats ? (
          <div className="mt-10 p-10 rounded-3xl bg-card border border-border text-center">
            <p className="text-5xl">😕</p>
            <p className="mt-4 font-bold text-text">Stats not available</p>
          </div>
        ) : (
          <>
            {/* Top Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total PDFs" value={stats.totalPdfs} icon="📚" />
              <StatCard
                title="Total Users"
                value={stats.users?.totalUsers || 0}
                icon="👥"
              />
              <StatCard
                title="Students"
                value={stats.users?.totalStudents || 0}
                icon="🎓"
              />
              <StatCard
                title="Admins"
                value={stats.users?.totalAdmins || 0}
                icon="🛡️"
              />
            </div>

            {/* Category Stats */}
            <div className="mt-12">
              <h2 className="text-xl font-extrabold text-text">
                Category Wise PDFs 📌
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                  title="Notes"
                  value={stats.categories?.notes || 0}
                  icon="📖"
                />
                <StatCard
                  title="PYQ"
                  value={stats.categories?.pyq || 0}
                  icon="📌"
                />
                <StatCard
                  title="Sample Papers"
                  value={stats.categories?.sample || 0}
                  icon="📝"
                />
                <StatCard
                  title="Important"
                  value={stats.categories?.important || 0}
                  icon="⭐"
                />
                <StatCard
                  title="Syllabus"
                  value={stats.categories?.syllabus || 0}
                  icon="📄"
                />
                <StatCard
                  title="College"
                  value={stats.categories?.college || 0}
                  icon="🎓"
                />
              </div>
            </div>

            {/* Latest Uploads */}
            <div className="mt-12">
              <h2 className="text-xl font-extrabold text-text">
                Latest Uploads 🚀
              </h2>
              <p className="mt-2 text-text/70">
                Last 5 PDFs uploaded on StudyMega.
              </p>

              {stats.latestPdfs?.length === 0 ? (
                <div className="mt-6 p-8 rounded-3xl bg-card border border-border text-center">
                  <p className="text-5xl">📭</p>
                  <p className="mt-4 font-bold text-text">
                    No PDFs uploaded yet
                  </p>
                </div>
              ) : (
                <div className="mt-6 overflow-hidden rounded-3xl bg-card border border-border shadow-sm">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-background border-b border-border">
                        <tr>
                          <th className="p-4 text-sm font-extrabold text-text">
                            Title
                          </th>
                          <th className="p-4 text-sm font-extrabold text-text">
                            Category
                          </th>
                          <th className="p-4 text-sm font-extrabold text-text">
                            Subject
                          </th>
                          <th className="p-4 text-sm font-extrabold text-text">
                            Class
                          </th>
                          <th className="p-4 text-sm font-extrabold text-text">
                            Uploaded
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {stats.latestPdfs?.map((p) => (
                          <tr
                            key={p._id}
                            className="border-b border-border last:border-none hover:bg-background/60 transition"
                          >
                            <td className="p-4 font-bold text-text">
                              {p.title}
                            </td>
                            <td className="p-4 text-text/80 font-semibold">
                              {p.category}
                            </td>
                            <td className="p-4 text-text/80">
                              {p.subject || "-"}
                            </td>
                            <td className="p-4 text-text/80">
                              {p.className || "-"}
                            </td>
                            <td className="p-4 text-text/70 text-sm">
                              {p.createdAt
                                ? new Date(p.createdAt).toLocaleString()
                                : "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}