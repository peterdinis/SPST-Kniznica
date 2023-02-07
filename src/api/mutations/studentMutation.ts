import axios from "axios";
import { ILoginUser, IRegisterUser } from "../interfaces/IUser";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string


const api = axios.create({
  baseURL: baseEnv
});

export const registerStudent = (data: IRegisterUser) => {
  return api.post("student/register", data);
};

export const loginStudent = (data: ILoginUser) => {
  return api.post("student/login", data);
};

export const logoutStudent = () => {
  localStorage.clear();
  window.location.replace("/student/login");
}