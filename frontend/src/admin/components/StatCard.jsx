export default function StatCard({ title, value, subtitle }) {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <p className="text-sm text-text/60 font-semibold">{title}</p>
      <p className="mt-2 text-3xl font-extrabold text-text">{value}</p>
      <p className="mt-2 text-sm text-text/70">{subtitle}</p>
    </div>
  );
}
