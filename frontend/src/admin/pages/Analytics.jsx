import AdminSidebar from "../components/AdminSidebar";
import StatCard from "../components/StatCard";

export default function Analytics() {
  const topPdfs = [
    {
      title: "Class 10 Science Important Questions",
      downloads: 2400,
      category: "Important Questions",
    },
    {
      title: "B.Tech DSA Unit 1 Notes",
      downloads: 2700,
      category: "College",
    },
    {
      title: "Class 12 Physics PYQ (2020-2025)",
      downloads: 1800,
      category: "PYQ",
    },
    {
      title: "Class 10 Maths Chapter 1 Notes",
      downloads: 540,
      category: "Notes",
    },
  ];

  const stats = [
    {
      title: "Total Visitors",
      value: "98,450",
      subtitle: "Last 30 days (demo)",
    },
    {
      title: "PDF Views",
      value: "61,200",
      subtitle: "Students opened PDFs",
    },
    {
      title: "Downloads",
      value: "44,120",
      subtitle: "Total downloads in 30 days",
    },
    {
      title: "AI Planner Uses",
      value: "8,920",
      subtitle: "Study plans generated",
    },
  ];

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-8 bg-background">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main */}
        <div className="w-full">
          {/* Header */}
          <div className="w-full p-6 rounded-3xl bg-card border border-border">
            <p className="text-sm text-text/60">Admin Panel</p>
            <h1 className="mt-1 text-2xl md:text-3xl font-extrabold text-text">
              Analytics 📈
            </h1>
            <p className="mt-2 text-text/70">
              Track downloads, views and platform performance.
            </p>
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

          {/* Top PDFs */}
          <div className="mt-6 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-text">
                  Top Performing PDFs 🔥
                </h2>
                <p className="mt-1 text-sm text-text/70">
                  Most downloaded PDFs (demo).
                </p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
                Last 30 Days
              </span>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[900px] border border-border rounded-2xl overflow-hidden">
                <thead className="bg-background">
                  <tr className="text-left">
                    <th className="p-4 text-sm font-bold text-text">Title</th>
                    <th className="p-4 text-sm font-bold text-text">Category</th>
                    <th className="p-4 text-sm font-bold text-text">
                      Downloads
                    </th>
                    <th className="p-4 text-sm font-bold text-text">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {topPdfs.map((p, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-border hover:bg-background transition"
                    >
                      <td className="p-4 text-text font-semibold">{p.title}</td>

                      <td className="p-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-bold border border-border">
                          {p.category}
                        </span>
                      </td>

                      <td className="p-4 text-text/70">{p.downloads}</td>

                      <td className="p-4">
                        <button
                          onClick={() => alert("Open PDF details next step 😄")}
                          className="
                            px-4 py-2 rounded-2xl bg-background border border-border
                            font-semibold text-text hover:bg-card transition
                          "
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 p-6 rounded-3xl bg-primary/10 border border-border">
            <p className="font-bold text-text">🔥 Next Step</p>
            <p className="mt-2 text-text/70">
              Next we will add real charts and connect analytics backend.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
