import API from "./api";

// Optional: Simple AI chat/ask endpoint
export const askAI = async (prompt) => {
  const res = await API.post("/ai/ask", { prompt });
  return res.data;
};

// ✅ Main: AI Study Plan Generator
export const generateAiStudyPlan = async (payload) => {
  const res = await API.post("/ai/study-plan", payload);
  return res.data;
};