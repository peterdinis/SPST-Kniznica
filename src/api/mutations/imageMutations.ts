import axios from "axios";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const register = (username: string, data: any) => {
    return api.post(`/student/${username}/upload`, data);
}