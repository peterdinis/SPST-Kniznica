import { IAuthor } from "@/interfaces/IAuthor";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const createNewAuthor = (data: IAuthor) => {
  return api.post("authors", data)
}

export const updateAuthor = () => {
  return;

}

export const deleteAuthor = () => {
  return;
}