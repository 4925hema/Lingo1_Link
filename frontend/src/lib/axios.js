import axios from "axios";

// Use an explicit Vite environment variable if provided. Otherwise default to
// your deployed Render backend so the frontend can run locally and talk to it.
const DEFAULT_RENDER_API = "https://lingolink-language.onrender.com/api";
const BASE_URL = import.meta.env.VITE_API_URL || DEFAULT_RENDER_API;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

console.info("Axios base URL:", BASE_URL);
