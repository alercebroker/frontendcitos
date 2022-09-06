import axios from "axios";
const AUTH_URL = "https://dev.users.alerce.online";

export const axiosConfigured = axios.create({
  baseURL: AUTH_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});
