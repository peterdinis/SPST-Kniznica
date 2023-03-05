import authApi from "../lib/studentInterceptor";

export const getTeacherProfile = () => authApi.get("teacher/profile").then((res) => res.data);