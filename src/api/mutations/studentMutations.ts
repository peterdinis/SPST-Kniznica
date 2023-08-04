import { IDeleteStudent, ILogin, IRegister } from "@/interfaces/IStudent";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const register = (data: IRegister) => {
    return api.post("student/register", data);
}

export const loginStudent = (data: ILogin) => {
  return api.post("student/login", data);
}

// TODO: fix any
export const deleteStudent = (data: any) => {
  return api.delete("student/profile/delete", data);
}