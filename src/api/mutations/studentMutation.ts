import axios from "axios";
import { ILoginStudent, IRegisterStudent } from "../interfaces/IUser";
import Cookies from "js-cookie";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string

const api = axios.create({
  baseURL: baseEnv,
  withCredentials: true
});

export const registerStudent = (data: IRegisterStudent) => {
  return api.post("student/register", data);
};

export const loginStudent = (data: ILoginStudent) => {
  return api.post("student/login", data);
};

export const logoutStudent = () => {
  localStorage.clear();
  Cookies.remove('newStudent', { path: '' }) 
  Cookies.remove('email', { path: '' }) 
  Cookies.remove("Max-Age", {path: ''})
  Cookies.remove("loggedStudent", { path: '' })
  window.location.replace("/student/login");
}