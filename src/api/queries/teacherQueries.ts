import authApi from "../lib/axios";

export const getTeacherProfile = () => authApi.get("teacher/profile").then((res) => res.data);