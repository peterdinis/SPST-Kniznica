import axios from "axios";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string


const api = axios.create({
  baseURL: baseEnv
});

export const getCategories = () => api.get("categories").then((res) => res.data);

export const getOneCategory = (id: string) => {
  if (!id) {
    return;
  }

  return api.get(`category/${id}`).then((res) => res.data);
};
