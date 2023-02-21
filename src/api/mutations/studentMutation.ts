import axios from "axios";
import { ILoginStudent, IRegisterStudent } from "../interfaces/IUser";
import Cookies from "js-cookie";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string

const api = axios.create({
  baseURL: baseEnv,
  withCredentials: true,
  timeout: 30000,
  timeoutErrorMessage: "Timeout error"
});

export const registerStudent = (data: IRegisterStudent) => {
  return api.post("student/register", data);
};

export const loginStudent = (data: ILoginStudent) => {
  return api.post("student/login", data);
};

export const logoutStudent = () => {
  Cookies.remove("currentUser");
  Cookies.remove("studentAccessToken");
  
}