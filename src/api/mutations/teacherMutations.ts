import axios from "axios";
import { ILogin, INewPasswordTeacher, IRegister } from "@/interfaces/ITeacher";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const register = (data: IRegister) => {
  return api.post("teacher/register", data);
}

export const login = (data: ILogin) => {
return api.post("teacher/login", data);
}

export const teacherChangePassword = (teacherData: INewPasswordTeacher) => {
  return api.patch(`teacher/password/${teacherData.username}/new`,teacherData.newPassword);
};