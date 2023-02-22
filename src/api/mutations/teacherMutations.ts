import axios from "axios";
import Cookies from "js-cookie";
import { ILoginTeacher, IRegisterTeacher } from "../interfaces/ITeacher";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
  withCredentials: true,
});

export const registerTeacher = (data: IRegisterTeacher) => {
  return api.post("teacher/register", data);
};

export const loginTeacher = (data: ILoginTeacher) => {
  return api.post("teacher/login", data);
};

export const logoutTeacher = () => {
  Cookies.remove("currentTeacher");
  Cookies.remove("teacherAccessToken");
};
