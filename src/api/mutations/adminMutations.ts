import { ILogin, IRegister } from "@/interfaces/IAdmin";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const register = (data: IRegister) => {
  return api.post("admin/register", data);
};

export const login = (data: ILogin) => {
  return api.post("admin/login", data);
};


export const deleteTeacher = () => {
  return;
}

export const deleteAuthor = () => {
  return;
}