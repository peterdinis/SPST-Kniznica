import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string
});

export const getExampleData = () => api.get("example").then((res) => res.data);