import axios from "axios";

/**
 * Single Axios instance for the whole app.
 *
 * Why centralize this instead of calling axios.get(...) directly
 * in components?
 * 1. One base URL to change when we point at the real Spring Boot
 *    backend (e.g. http://localhost:8080/api).
 * 2. One place to attach the JWT auth token to every request.
 * 3. One place to handle global errors (401 -> redirect to login, etc).
 *
 * VITE_API_BASE_URL is read from a .env file, which is intentionally
 * NOT committed to Git (see .gitignore). This keeps environment-specific
 * config (local vs deployed backend) out of source control.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the auth token (once we build login in a later milestone)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("bitehub_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
