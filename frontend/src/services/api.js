import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Token auto attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("studymega_token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
