import { IAuthor, IUpdateAuthor } from "@/interfaces/IAuthor";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const createNewAuthor = (data: IAuthor) => {
  return api.post("authors", data)
}

export const updateAuthor = (id: number, data: IUpdateAuthor) => {
  if(!id) {
    return;
  }

  return api.patch(`author/${id}`, data);

}

export const deleteAuthor = (id: number) => {
  if(!id) {
    return;
  }

  return api.delete(`author/${id}`);
}