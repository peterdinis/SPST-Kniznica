import authApi from "../interceptors/teacherInterceptor";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string
});

export const getAllTeachers = () => api.get("teachers").then((res) => res.data);

export const getTeacherProfile = () => authApi.get("teacher/profile").then((res) => res.data);

export const getMyBorrowedBooks = (username: string) => {
  if (!username) return;

  return authApi.get(`/booking/${username}`).then((res) => res.data);
};

export const getMyTeacherMessages = (username: string) => {
  if(!username) return;

  return authApi.get(`messages/my/${username}`);
}