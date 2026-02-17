import { useMemo, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const DUMMY_USERS = [
  {
    id: 1,
    name: "Aditya Singh",
    email: "aadi21082003@gmail.com",
    role: "Student",
    joined: "2026-02-10",
    saved: 12,
    downloads: 58,
  },
  {
    id: 2,
    name: "Rohit Kumar",
    email: "rohit@gmail.com",
    role: "Student",
    joined: "2026-02-11",
    saved: 6,
    downloads: 24,
  },
  {
    id: 3,
    name: "Neha Sharma",
    email: "neha@gmail.com",
    role: "Student",
    joined: "2026-02-13",
    saved: 19,
    downloads: 102,
  },
  {
    id: 4,
    name: "Admin",
    email: "admin@studymega.com",
    role: "Admin",
    joined: "2026-02-01",
    saved: 0,
    downloads: 0,
  },
];

export default function ManageUsers() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("all");
  const [data, setData] = useState(DUMMY_USERS);

  const filtered = useMemo(() => {
    let list = [...data];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((u) =>
        `${u.name} ${u.email}`.toLowerCase().includes(q)
      );
    }

    if (role !== "all") list = list.filter((u) => u.role === role);

    return list;
  }, [data, query, role]);

  const deleteUser = (id) => {
    const ok = confirm("Delete this user? ❌ (Demo)");
    if (!ok) return;
    setData((prev) => prev.filter((u) => u.id !== id));
    alert("User deleted (Demo) ✅");
  };

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
              Manage Users 👥
            </h1>
            <p className="mt-2 text-text/70">
              View users, track activity and manage roles.
            </p>
          </div>

          {/* Controls */}
          <div className="mt-6 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Search */}
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold text-text mb-2">
                  Search Users
                </p>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name or email..."
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                />
              </div>

              {/* Role Filter */}
              <div>
                <p className="text-sm font-semibold text-text mb-2">Role</p>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-2xl bg-background border border-border
                    outline-none transition
                    focus:ring-4 focus:ring-primary/20 focus:border-primary
                  "
                >
                  <option value="all">All Roles</option>
                  <option value="Student">Student</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-text/70">
                Showing <b className="text-text">{filtered.length}</b> users
              </p>

              <button
                onClick={() => alert("Invite user feature later 😄")}
                className="
                  px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                  hover:bg-secondary transition shadow-sm
                "
              >
                Invite User
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-6 w-full p-6 rounded-3xl bg-card border border-border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border border-border rounded-2xl overflow-hidden">
                <thead className="bg-background">
                  <tr className="text-left">
                    <th className="p-4 text-sm font-bold text-text">Name</th>
                    <th className="p-4 text-sm font-bold text-text">Email</th>
                    <th className="p-4 text-sm font-bold text-text">Role</th>
                    <th className="p-4 text-sm font-bold text-text">Joined</th>
                    <th className="p-4 text-sm font-bold text-text">Saved</th>
                    <th className="p-4 text-sm font-bold text-text">
                      Downloads
                    </th>
                    <th className="p-4 text-sm font-bold text-text">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((u) => (
                    <tr
                      key={u.id}
                      className="border-t border-border hover:bg-background transition"
                    >
                      <td className="p-4 text-text font-semibold">{u.name}</td>
                      <td className="p-4 text-text/70">{u.email}</td>

                      <td className="p-4">
                        <span
                          className={`
                            text-xs px-3 py-1 rounded-full font-bold border border-border
                            ${
                              u.role === "Admin"
                                ? "bg-primary/10 text-secondary"
                                : "bg-background text-text"
                            }
                          `}
                        >
                          {u.role}
                        </span>
                      </td>

                      <td className="p-4 text-text/70">{u.joined}</td>
                      <td className="p-4 text-text/70">{u.saved}</td>
                      <td className="p-4 text-text/70">{u.downloads}</td>

                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => alert("Edit role next step 😄")}
                            className="
                              px-4 py-2 rounded-2xl bg-background border border-border
                              font-semibold text-text hover:bg-card transition
                            "
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deleteUser(u.id)}
                            className="
                              px-4 py-2 rounded-2xl bg-primary text-white font-semibold
                              hover:bg-secondary transition
                            "
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-10 text-center">
                        <p className="text-lg font-bold text-text">
                          No users found 😢
                        </p>
                        <p className="mt-2 text-text/70">
                          Try searching different keywords.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 p-6 rounded-3xl bg-primary/10 border border-border">
            <p className="font-bold text-text">🔥 Next Step</p>
            <p className="mt-2 text-text/70">
              Next we will connect backend and show real user data.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
