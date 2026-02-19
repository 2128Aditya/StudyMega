import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔥 Token auto attach (Admin routes ke liye)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("studymega_token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

/* =========================
   PUBLIC APIs
========================= */

// category pass karo: "notes" | "pyq" | "sample-papers" | "important" | "syllabus" | "college"
// agar empty "" doge to all PDFs aayenge
export const fetchPdfs = async (category = "") => {
  const url = category ? `/pdfs?category=${category}` : `/pdfs`;
  const res = await API.get(url);
  return res.data;
};

// latest PDFs (Home page)
export const fetchLatestPdfs = async (limit = 6) => {
  const res = await API.get(`/pdfs?latest=true&limit=${limit}`);
  return res.data;
};

// 🔥 Search PDFs (title/subject/className)
export const searchPdfs = async (q) => {
  const res = await API.get(`/pdfs?q=${encodeURIComponent(q)}`);
  return res.data;
};

// single pdf by id
export const fetchPdfById = async (id) => {
  const res = await API.get(`/pdfs/${id}`);
  return res.data;
};

/* =========================
   ADMIN APIs (Protected)
========================= */

export const uploadPdf = async (pdfData) => {
  const res = await API.post("/pdfs", pdfData);
  return res.data;
};

export const deletePdf = async (id) => {
  const res = await API.delete(`/pdfs/${id}`);
  return res.data;
};
