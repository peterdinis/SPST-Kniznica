import axios from "axios";
import { ICategory } from "../../interfaces/ICategory";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const createNewCategory = (data: ICategory) => {
    return api.post("category", data);
}

export const updateCategory = (id: number, data: ICategory) => {
  if(!id) {
    return;
  }

  return api.patch(`category/${id}`, data);
}

export const deleteCategory = (id: number) => {
  if(!id) {
    return;
  }

  return api.delete(`category/${id}`);
}