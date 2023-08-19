import axios from "axios";
import { IBook, IUpdateBook } from "../../interfaces/IBook";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const createNewBook = (data: IBook) => {
  return api.post("books", data);
};

export const updateBook = (id: number, data: IUpdateBook) => {
  if(!id) {
    return;
  }

  return api.put(`book/${id}`, data);
}

export const deleteBook = (id: number) => {
  if(!id) {
    return;
  }

  return api.delete(`book/${id}`);
}