import { useMemo, useState } from "react";
import PageShell from "../../components/common/PageShell";

const SUBJECTS_BY_CLASS = {
  "6": ["Maths", "Science", "English", "Hindi", "SST"],
  "7": ["Maths", "Science", "English", "Hindi", "SST"],
  "8": ["Maths", "Science", "English", "Hindi", "SST"],
  "9": ["Maths", "Science", "English", "Hindi", "SST"],
  "10": ["Maths", "Science", "English", "Hindi", "SST"],
  "11": ["Physics", "Chemistry", "Maths", "Biology", "English"],
  "12": ["Physics", "Chemistry", "Maths", "Biology", "English"],
  College: ["DSA", "DBMS", "OS", "CN", "Python", "Web Dev"],
};

function buildPlan({ level, selectedSubjects, examDate, hoursPerDay, weakSubjects }) {
  // Dummy generator (frontend only)
  const days = 14;
  const subjects = selectedSubjects.length ? selectedSubjects : ["General Study"];

  const plan = [];
  for (let i = 1; i <= days; i++) {
    const subject = subjects[(i - 1) % subjects.length];
    const isWeak = weakSubjects.includes(subject);

    plan.push({
      day: i,
      subject,
      focus: isWeak ? "Weak topic practice + PYQ" : "Notes + Examples + PYQ",
      hours: hoursPerDay,
      revision: i % 4 === 0 ? "Revision + Mini Test" : "Quick recap (15 min)",
    });
  }

  return {
    meta: {
      level,
      examDate,
      hoursPerDay,
      subjects,
      weakSubjects,
    },
    plan,
  };
}

export default function AiPlanner() {
  const [level, setLevel] = useState("10");
  const [board, setBoard] = useState("CBSE");
  const [medium, setMedium] = useState("English");
  const [examDate, setExamDate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState(3);

  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [weakSubjects, setWeakSubjects] = useState([]);

  const [result, setResult] = useState(null);

  const availableSubjects = useMemo(() => {
    return SUBJECTS_BY_CLASS[level] || [];
  }, [level]);

  const toggleSubject = (s) => {
    setSelectedSubjects((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

    // if removed from selected, also remove from weak
    setWeakSubjects((prev) => prev.filter((x) => x !== s));
  };

  const toggleWeak = (s) => {
    setWeakSubjects((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const generate = () => {
    const plan = buildPlan({
      level,
      selectedSubjects,
      examDate,
      hoursPerDay,
      weakSubjects,
    });
    setResult(plan);
  };

  const reset = () => {
    setBoard("CBSE");
    setMedium("English");
    setExamDate("");
    setHoursPerDay(3);
    setSelectedSubjects([]);
    setWeakSubjects([]);
    setResult(null);
  };

  return (
    <PageShell
      title="AI Study Planner"
      subtitle="Generate a day-wise study plan + roadmap for your exam preparation."
    >
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* LEFT: FORM */}
        <div className="w-full p-6 rounded-3xl bg-card border border-border">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-text">
                Build your plan 🤖
              </h2>
              <p className="mt-1 text-text/70 text-sm">
                Fill basic details. Plan will be generated instantly.
              </p>
            </div>

            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-secondary font-semibold border border-border">
              Class 6 → Graduation
            </span>
          </div>

          {/* Inputs */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Level */}
            <div className="w-full">
              <p className="text-sm font-semibold text-text mb-2">Class / Level</p>
              <select
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  setSelectedSubjects([]);
                  setWeakSubjects([]);
                  setResult(null);
                }}
                className="
                  w-full px-4 py-3 rounded-2xl bg-card border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              >
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
                <option value="College">College</option>
              </select>
            </div>

            {/* Board */}
            <div className="w-full">
              <p className="text-sm font-semibold text-text mb-2">Board</p>
              <select
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="
                  w-full px-4 py-3 rounded-2xl bg-card border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              >
                <option>CBSE</option>
                <option>UP Board</option>
                <option>ICSE</option>
                <option>State Board</option>
                <option>University</option>
              </select>
            </div>

            {/* Medium */}
            <div className="w-full">
              <p className="text-sm font-semibold text-text mb-2">Medium</p>
              <select
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
                className="
                  w-full px-4 py-3 rounded-2xl bg-card border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              >
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            {/* Hours */}
            <div className="w-full">
              <p className="text-sm font-semibold text-text mb-2">
                Daily Study Hours
              </p>
              <input
                type="number"
                min={1}
                max={12}
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="
                  w-full px-4 py-3 rounded-2xl bg-card border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              />
            </div>

            {/* Exam Date */}
            <div className="w-full sm:col-span-2">
              <p className="text-sm font-semibold text-text mb-2">Exam Date</p>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="
                  w-full px-4 py-3 rounded-2xl bg-card border border-border
                  outline-none transition
                  focus:ring-4 focus:ring-primary/20 focus:border-primary
                "
              />
            </div>
          </div>

          {/* Subjects */}
          <div className="mt-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-text">Select Subjects</p>
                <p className="text-xs text-text/60 mt-1">
                  Click to select. Then mark weak subjects.
                </p>
              </div>

              <span className="text-xs text-text/60">
                Selected: {selectedSubjects.length}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {availableSubjects.map((s) => {
                const selected = selectedSubjects.includes(s);

                return (
                  <button
                    key={s}
                    onClick={() => toggleSubject(s)}
                    className={`
                      px-4 py-2 rounded-2xl border text-sm font-semibold transition
                      ${
                        selected
                          ? "bg-primary text-white border-primary"
                          : "bg-background text-text border-border hover:bg-card"
                      }
                    `}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weak subjects */}
          <div className="mt-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-text">Weak Subjects</p>
                <p className="text-xs text-text/60 mt-1">
                  Mark weak ones for extra time.
                </p>
              </div>
              <span className="text-xs text-text/60">
                Weak: {weakSubjects.length}
              </span>
            </div>

            {selectedSubjects.length === 0 ? (
              <div className="mt-4 p-4 rounded-2xl bg-background border border-border text-sm text-text/70">
                Select subjects first.
              </div>
            ) : (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedSubjects.map((s) => {
                  const weak = weakSubjects.includes(s);

                  return (
                    <button
                      key={s}
                      onClick={() => toggleWeak(s)}
                      className={`
                        px-4 py-2 rounded-2xl border text-sm font-semibold transition
                        ${
                          weak
                            ? "bg-secondary text-white border-secondary"
                            : "bg-card text-text border-border hover:bg-background"
                        }
                      `}
                    >
                      {weak ? "⚡ " : ""}{s}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={reset}
              className="
                px-6 py-3 rounded-2xl bg-background border border-border
                font-semibold text-text hover:bg-card transition
              "
            >
              Reset
            </button>

            <button
              onClick={generate}
              className="
                px-6 py-3 rounded-2xl bg-primary text-white font-semibold
                hover:bg-secondary transition shadow-sm
              "
            >
              Generate Plan
            </button>
          </div>

          <p className="mt-4 text-xs text-text/60">
            ⚠️ Abhi ye frontend demo plan generate karta hai. Backend connect
            karte hi real AI output aayega.
          </p>
        </div>

        {/* RIGHT: OUTPUT */}
        <div className="w-full p-6 rounded-3xl bg-card border border-border">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-text">
                Your Plan Preview 📅
              </h2>
              <p className="mt-1 text-text/70 text-sm">
                Generated day-wise schedule will appear here.
              </p>
            </div>

            <button
              onClick={() => alert("PDF export next step me add karenge 😄")}
              className="
                px-4 py-2 rounded-2xl bg-background border border-border
                text-sm font-semibold text-text hover:bg-card transition
              "
            >
              Export PDF
            </button>
          </div>

          {!result ? (
            <div className="mt-8 p-8 rounded-3xl bg-background border border-border text-center">
              <h3 className="text-lg font-bold text-text">
                No plan generated yet
              </h3>
              <p className="mt-2 text-text/70 text-sm">
                Fill the form and click <b>Generate Plan</b>.
              </p>
            </div>
          ) : (
            <>
              {/* Meta */}
              <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <p className="text-xs text-text/60">Level</p>
                  <p className="font-bold text-text">{result.meta.level}</p>
                </div>
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <p className="text-xs text-text/60">Board</p>
                  <p className="font-bold text-text">{board}</p>
                </div>
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <p className="text-xs text-text/60">Hours/Day</p>
                  <p className="font-bold text-text">{result.meta.hoursPerDay}</p>
                </div>
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <p className="text-xs text-text/60">Medium</p>
                  <p className="font-bold text-text">{medium}</p>
                </div>
              </div>

              {/* Plan Table */}
              <div className="mt-7 overflow-x-auto">
                <table className="w-full min-w-[800px] border border-border rounded-2xl overflow-hidden">
                  <thead className="bg-background">
                    <tr className="text-left">
                      <th className="p-4 text-sm font-bold text-text">Day</th>
                      <th className="p-4 text-sm font-bold text-text">Subject</th>
                      <th className="p-4 text-sm font-bold text-text">Focus</th>
                      <th className="p-4 text-sm font-bold text-text">Hours</th>
                      <th className="p-4 text-sm font-bold text-text">Revision</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.plan.map((row) => (
                      <tr
                        key={row.day}
                        className="border-t border-border hover:bg-background transition"
                      >
                        <td className="p-4 font-semibold text-text">
                          Day {row.day}
                        </td>
                        <td className="p-4 text-text">{row.subject}</td>
                        <td className="p-4 text-text/70">{row.focus}</td>
                        <td className="p-4 text-text">{row.hours} hrs</td>
                        <td className="p-4 text-text/70">{row.revision}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Suggestion */}
              <div className="mt-7 p-5 rounded-3xl bg-primary/10 border border-border">
                <p className="font-bold text-text">🔥 Smart Suggestion</p>
                <p className="mt-1 text-sm text-text/70">
                  Weak subjects ko daily 30 min extra do + har 4th day mini test
                  zaroor.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </PageShell>
  );
}
