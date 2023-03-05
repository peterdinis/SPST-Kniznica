import authApi from "../lib/axios";

export const getStudentProfile = () => authApi.get("student/profile").then((res) => res.data);