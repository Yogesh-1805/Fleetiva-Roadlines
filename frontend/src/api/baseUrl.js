
const normalizeUrl = (url) => (url ? url.replace(/\/$/, "") : "");

export const getApiBaseUrl = () => {
  const base = import.meta.env.VITE_API_BASE_URL;

  if (!base) {
    throw new Error("VITE_API_BASE_URL is not set in your .env file");
  }

  return normalizeUrl(base);
};
