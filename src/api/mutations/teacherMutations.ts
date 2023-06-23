import axios from "axios";
import { ILogin, INewPasswordTeacher, IRegister, IUpdateTeacher } from "@/interfaces/ITeacher";

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

export const updateProfile = (data: IUpdateTeacher, username: string) => {
  return api.patch(`teacher/profile/update/${username}`, data)
}

export const deleteProfile = (username: string) => {
  return api.delete(`teacher/profile/update/${username}`);
}

export const studentChangePassword = (teacherData: INewPasswordTeacher) => {
  return api.patch(`student/password/${teacherData.username}/new`, teacherData.newPassword);
};

export const deleteMessage = (id: number) => {
  if(!id) {
    return;
  }

  return api.delete(`message/delete/${id}`);
}