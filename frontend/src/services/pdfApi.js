import API from "./api";

export const getAllPdfs = async () => {
  const res = await API.get("/pdfs");
  return res.data;
};

export const getPdfById = async (id) => {
  const res = await API.get(`/pdfs/${id}`);
  return res.data;
};

export const uploadPdf = async (data) => {
  const res = await API.post("/pdfs", data); // admin only
  return res.data;
};

export const deletePdf = async (id) => {
  const res = await API.delete(`/pdfs/${id}`); // admin only
  return res.data;
};

export const updatePdf = async (id, data) => {
  const res = await API.patch(`/pdfs/${id}`, data); // admin only
  return res.data;
};

export const increaseDownload = async (id) => {
  const res = await API.post(`/pdfs/${id}/download`);
  return res.data;
};
