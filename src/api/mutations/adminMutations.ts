import { ILogin, IRegister } from "@/interfaces/IAdmin";
import axios from "axios";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string

const api = axios.create({
  baseURL: baseEnv
});

export const register = (data: IRegister) => {
  return api.post("admin/register", data);
}

export const login = (data: ILogin) => {
return api.post("admin/login", data);
}