import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("studymega_token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const fetchAdminStats = async () => {
  const res = await API.get("/admin/stats");
  return res.data;
};