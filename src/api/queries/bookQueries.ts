import axios from "axios";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string


const api = axios.create({
  baseURL: baseEnv
});

export const getBooks = () => api.get("books").then((res) => res.data);

export const getOneBook = (id: string) => {
  if (!id) {
    return;
  }

  return api.get(`book/${id}`).then((res) => res.data);
};


export const searchForBooks = (value: string) => {
    return api.get(`books/search?q=${value}`)
}