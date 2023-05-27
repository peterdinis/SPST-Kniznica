import axios from "axios";
import { ILogin, IRegister } from "@/interfaces/ITeacher";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const register = (data: IRegister) => {
  return api.post("teacher/register", data);
}

export const login = (data: ILogin) => {
return api.post("teacher/login", data);
}

export const teacherChangePassword = (username: string, newPassword: string) => {
  return api.patch(`teacher/password/${username}/new`, newPassword);
};