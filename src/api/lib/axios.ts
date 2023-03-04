import axios from "axios";
import Cookies from "js-cookie";

const baseURL =
process.env.NEXT_PUBLIC_BACKEND_URL as string;

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