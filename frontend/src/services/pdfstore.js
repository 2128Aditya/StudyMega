const KEY = "studymega_pdfs";

export function getPublicPdfs() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function getPdfById(id) {
  const all = getPublicPdfs();
  return all.find((p) => String(p.id) === String(id));
}
