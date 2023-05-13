import axios from "axios";
import { IBook } from "../../interfaces/IBook";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const createNewBook = (data: IBook) => {
  return api.post("books", data);
};

export const updateBook = (id: number, data: IBook) => {
  if(!id) {
    return;
  }

  return api.patch(`book/${id}`, data);
}

export const deleteBook = (id: number) => {
  if(!id) {
    return;
  }

  return api.delete(`book/${id}`);
}