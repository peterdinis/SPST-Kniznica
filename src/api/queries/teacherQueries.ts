import authApi from "../tokens/studentInterceptor";

export const getTeacherProfile = () => authApi.get("teacher/profile").then((res) => res.data);