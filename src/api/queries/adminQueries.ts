import adminApi from "../tokens/adminInterceptor";

export const getAdminExampleData = () =>
  adminApi.get("admin/example").then((res) => res.data);

export const getStudentProfile = () =>
  adminApi.get("admin/profile").then((res) => res.data);
