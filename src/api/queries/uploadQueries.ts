import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string
  });

export const checkUploadServer = () => api.get("upload/server/status").then((res) => res.data);