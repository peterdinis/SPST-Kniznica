import adminApi from "../tokens/adminInterceptor";

export const getStudentProfile = () =>
  adminApi.get("admin/profile").then((res) => res.data);
