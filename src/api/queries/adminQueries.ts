import adminApi from "../interceptors/adminInterceptor";

export const getStudentProfile = () =>
  adminApi.get("admin/profile").then((res) => res.data);
