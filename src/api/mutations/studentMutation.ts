import axios from "axios";
import { ILoginUser, IRegisterUser } from "../interfaces/IUser";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
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