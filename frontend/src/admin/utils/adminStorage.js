const KEY = "studymega_pdfs";

export function getAllPdfs() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveAllPdfs(pdfs) {
  localStorage.setItem(KEY, JSON.stringify(pdfs));
}

export function addPdf(pdf) {
  const old = getAllPdfs();
  const updated = [pdf, ...old];
  saveAllPdfs(updated);
  return updated;
}

export function deletePdfById(id) {
  const old = getAllPdfs();
  const updated = old.filter((p) => p.id !== id);
  saveAllPdfs(updated);
  return updated;
}

export function updatePdfById(id, updatedData) {
  const old = getAllPdfs();
  const updated = old.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
  saveAllPdfs(updated);
  return updated;
}
