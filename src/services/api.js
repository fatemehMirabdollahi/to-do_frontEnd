import axios from "axios";

const instant = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "/api/" : "",
  timeout: 30 * 1000
});

instant.interceptors.response.use(response => {
  return response;
});

export default instant;
