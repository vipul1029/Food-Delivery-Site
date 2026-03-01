// // frontend/src/api.js
// import axios from "axios";

// /**
//  * Use VITE_API_URL in production.
//  * In dev we use an empty string so requests are same-origin (vite proxy).
//  * This guarantees BASE is never `undefined`.
//  */
// const BASE =
//   (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ?? "";

// const api = axios.create({
//   baseURL: BASE,
//   withCredentials: true, // or false depending on your auth (true if backend uses cookies)
// });

// // Attach token automatically (optional but useful)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers = config.headers || {};
//     config.headers.Authorization = `Bearer ${token}`;
//     config.headers.token = token;
//   }
//   return config;
// });

// export default api;
