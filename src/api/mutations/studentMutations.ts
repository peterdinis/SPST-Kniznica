import { ILogin, IRegister, IUpdateStudent } from "@/interfaces/IStudent";
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

export const updateProfile = (data: IUpdateStudent, username: string) => {
  return api.patch(`student/profile/update/${username}`, data)
}

export const deleteProfile = (username: string) => {
  return api.delete(`student/profile/update/${username}`);
}

export const studentChangePassword = (username: string, newPassword: string) => {
  return api.patch(`student/password/${username}/new`, newPassword);
};