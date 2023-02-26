import axios from "axios";
import Cookies from "js-cookie";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.DOMAIN
    : "http://localhost:3000";

const authApi = axios.create({
  baseURL,
  withCredentials: true,
});

authApi.interceptors.request.use((config: any) => {
  const token = Cookies.get("accessToken") as unknown as string;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default authApi;