import { IRegister } from "@/interfaces/IStudent";
import axios from "axios";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const saveStudent = (data: IRegister) => {
    return api.post("student", data);
}

export const loginStudent = () => {
  return;
}