import authApi from "../interceptors/studentInterceptor";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string
});

export const getAllStudents = () => api.get("students").then((res) => res.data);

export const getStudentProfile = () =>
  authApi.get("student/profile").then((res) => res.data);


export const getMyStudentMessages = (username: string) => {
  if(!username) return;

  return authApi.get(`messages/my/${username}`);
}