export const getDriveDownloadLink = (url = "") => {
  if (!url) return "";

  // If already direct download
  if (url.includes("uc?export=download")) return url;

  // Example:
  // https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const match = url.match(/\/d\/(.*?)\//);

  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }

  // Example:
  // https://drive.google.com/open?id=FILE_ID
  const match2 = url.match(/id=([^&]+)/);
  if (match2 && match2[1]) {
    const fileId = match2[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }

  // If not drive link, return as is
  return url;
};