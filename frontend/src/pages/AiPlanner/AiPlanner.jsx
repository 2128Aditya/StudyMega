import { useState } from "react";
import { generateAiStudyPlan } from "../../services/aiApi";

export default function AiPlanner() {
  const [form, setForm] = useState({
    className: "",
    subjects: "",
    examDate: "",
    dailyHours: 3,
    level: "average",
    goals: "",
  });

  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setPlan(null);

      const data = await generateAiStudyPlan(form);

      // ✅ IMPORTANT CHANGE
      setPlan(data.plan);

    } catch (err) {
      alert(err?.response?.data?.message || "AI Plan failed");
      console.log(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 py-10">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text">
          AI Study Planner 🤖
        </h1>
        <p className="mt-2 text-text/70">
          Generate a day-wise plan using Free AI.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 p-6 rounded-3xl bg-card border border-border shadow-sm grid gap-4"
        >
          <input
            name="className"
            value={form.className}
            onChange={handleChange}
            placeholder="Class (e.g. Class 10 / B.Tech / BA)"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            required
          />

          <input
            name="subjects"
            value={form.subjects}
            onChange={handleChange}
            placeholder="Subjects (e.g. Math, Science, English)"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            required
          />

          <input
            type="date"
            name="examDate"
            value={form.examDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            required
          />

          <input
            type="number"
            name="dailyHours"
            value={form.dailyHours}
            onChange={handleChange}
            min={1}
            max={12}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
            required
          />

          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none"
          >
            <option value="beginner">Beginner</option>
            <option value="average">Average</option>
            <option value="good">Good</option>
            <option value="topper">Topper</option>
          </select>

          <textarea
            name="goals"
            value={form.goals}
            onChange={handleChange}
            placeholder="Goals (optional)"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-background outline-none min-h-[120px]"
          />

          <button
            disabled={loading}
            className="px-6 py-3 rounded-2xl bg-primary text-white font-extrabold hover:bg-secondary transition"
          >
            {loading ? "Generating..." : "Generate AI Plan"}
          </button>
        </form>

        {/* Output */}
        {plan && (
          <div className="mt-10 p-6 rounded-3xl bg-card border border-border shadow-sm">
            <h2 className="text-2xl font-extrabold text-text mb-6">
              Your AI Plan ✅
            </h2>

            {/* 🔥 Simple text render */}
            <pre className="whitespace-pre-wrap text-sm text-text leading-relaxed">
              {plan}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}