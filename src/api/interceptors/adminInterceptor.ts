import axios from "axios";
import Cookies from "js-cookie";

const baseURL =
process.env.NEXT_PUBLIC_BACKEND_URL as string;

const adminApi = axios.create({
  baseURL,
  withCredentials: true,
});

adminApi.interceptors.request.use((config: any) => {
  const token = Cookies.get("adminAccessToken") as unknown as string;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default adminApi;