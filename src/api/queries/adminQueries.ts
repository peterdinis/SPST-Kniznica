import adminApi from "../tokens/adminInterceptor";

export const getAdminExampleData = () => adminApi.get("admin/example").then((res) => res.data);

export const getAdminMessages = () => adminApi.get("admin/messages").then((res) => res.data);
