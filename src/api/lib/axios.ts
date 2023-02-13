import axios from "axios";
import { useStudentStore } from "../../store/studentStore";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const authApi = axios.create({
  url: baseEnv,
  withCredentials: true,
});

authApi.interceptors.request.use((config: any) => {
  const token = useStudentStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default authApi;
