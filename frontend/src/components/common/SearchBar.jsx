export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="w-full">
      <p className="text-sm font-semibold text-text mb-2">Search</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search notes by chapter, subject, class..."}
        className="
          w-full px-4 py-3 rounded-2xl bg-card border border-border
          outline-none transition
          focus:ring-4 focus:ring-primary/20 focus:border-primary
        "
      />
    </div>
  );
}
