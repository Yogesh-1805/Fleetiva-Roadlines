
const normalizeUrl = (url) => (url ? url.replace(/\/$/, "") : "");

export const getApiBaseUrl = () => {
  const base ="https://fleetiva-roadlines-backend.onrender.com/api";

  if (!base) {
    throw new Error("VITE_API_BASE_URL is not set in your .env file");
  }

  return normalizeUrl(base);
};
