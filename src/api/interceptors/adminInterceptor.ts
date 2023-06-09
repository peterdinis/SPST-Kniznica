import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

const adminApi = axios.create({
  baseURL,
  withCredentials: true,
});

interface RequestConfig extends AxiosRequestConfig {
  headers: {
    Authorization?: string | null;
  };
}

adminApi.interceptors.request.use((config) => {
  const token = Cookies.get("adminAccessToken") as string;
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  } as any;
  return config;
}) as unknown as (config: RequestConfig) => Promise<RequestConfig>;

export default adminApi;