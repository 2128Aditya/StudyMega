export default function Filters({
  filters,
  setFilters,
  classes = [],
  boards = [],
  subjects = [],
  mediums = [],
}) {
  const set = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

  const Select = ({ label, value, onChange, options }) => (
    <div className="w-full">
      <p className="text-sm font-semibold text-text mb-2">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-4 py-3 rounded-2xl bg-card border border-border
          outline-none transition
          focus:ring-4 focus:ring-primary/20 focus:border-primary
        "
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <Select
        label="Class"
        value={filters.class}
        onChange={(v) => set("class", v)}
        options={[
          { label: "All", value: "all" },
          ...classes.map((x) => ({ label: x, value: x })),
        ]}
      />

      <Select
        label="Board"
        value={filters.board}
        onChange={(v) => set("board", v)}
        options={[
          { label: "All", value: "all" },
          ...boards.map((x) => ({ label: x, value: x })),
        ]}
      />

      <Select
        label="Subject"
        value={filters.subject}
        onChange={(v) => set("subject", v)}
        options={[
          { label: "All", value: "all" },
          ...subjects.map((x) => ({ label: x, value: x })),
        ]}
      />

      <Select
        label="Medium"
        value={filters.medium}
        onChange={(v) => set("medium", v)}
        options={[
          { label: "All", value: "all" },
          ...mediums.map((x) => ({ label: x, value: x })),
        ]}
      />

      <Select
        label="Sort"
        value={filters.sort}
        onChange={(v) => set("sort", v)}
        options={[
          { label: "Latest", value: "latest" },
          { label: "Most Popular", value: "popular" },
          { label: "A → Z", value: "az" },
        ]}
      />
    </div>
  );
}
