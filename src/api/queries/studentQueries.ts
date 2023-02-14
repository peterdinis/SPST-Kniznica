import axios from "axios";

if(typeof window !== "undefined") {
    localStorage.setItem("Ping", "Pong");
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("studentAccessToken");
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});


export const studentProfile = api.get("student/profile").then((res)=>res.data);