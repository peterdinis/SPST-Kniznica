import authApi from "../tokens/studentInterceptor";

export const getStudentProfile = () =>
  authApi.get("student/profile").then((res) => res.data);
