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

export const deleteStudent = (studentId: number) => {
  return api.delete(`student/profile/delete/${studentId}`);
}