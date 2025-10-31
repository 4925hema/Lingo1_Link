import axios from "axios";

// Use an explicit Vite environment variable if provided. Otherwise default to
// your deployed backend. Normalize and ensure the final base URL contains
// the '/api' prefix so axiosInstance.post('/auth/login') => '/api/auth/login'.
const DEFAULT_RENDER_API = "https://lingo1-link.onrender.com";
let BASE_URL = import.meta.env.VITE_API_URL || DEFAULT_RENDER_API;

// strip trailing slashes
BASE_URL = BASE_URL.replace(/\/+$/g, "");

// ensure '/api' suffix
if (!BASE_URL.endsWith("/api")) {
  BASE_URL = BASE_URL + "/api";
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

console.info("Axios base URL:", BASE_URL);
