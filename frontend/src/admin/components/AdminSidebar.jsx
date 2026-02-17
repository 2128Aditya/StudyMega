import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    `
      w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition
      ${
        isActive
          ? "bg-primary text-white shadow-sm"
          : "text-text/80 hover:text-text hover:bg-primary/10"
      }
    `;

  return (
    <aside className="w-full lg:w-[280px] bg-card border border-border rounded-3xl p-5">
      {/* Brand */}
      <div className="flex items-center gap-3 px-2">
        <div className="h-10 w-10 rounded-2xl bg-primary/10 border border-border flex items-center justify-center font-extrabold text-primary">
          SM
        </div>
        <div>
          <p className="text-lg font-extrabold text-text leading-none">
            StudyMega
          </p>
          <p className="text-xs text-text/60">Admin Panel</p>
        </div>
      </div>

      {/* Links */}
      <nav className="mt-8 flex flex-col gap-2">
        <NavLink to="/admin/dashboard" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/admin/upload" className={linkClass}>
          ⬆️ Upload PDF
        </NavLink>

        <NavLink to="/admin/manage-pdfs" className={linkClass}>
          📚 Manage PDFs
        </NavLink>

        <NavLink to="/admin/manage-users" className={linkClass}>
          👥 Manage Users
        </NavLink>

        <NavLink to="/admin/analytics" className={linkClass}>
          📈 Analytics
        </NavLink>
      </nav>

      {/* Footer Note */}
      <div className="mt-10 p-4 rounded-3xl bg-background border border-border">
        <p className="font-bold text-text text-sm">🔥 Tip</p>
        <p className="mt-1 text-xs text-text/70 leading-relaxed">
          Upload PDFs with correct class/board/subject so students can find them
          easily.
        </p>
      </div>
    </aside>
  );
}
