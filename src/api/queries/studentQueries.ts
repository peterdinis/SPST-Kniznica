import authApi from "../tokens/studentInterceptor";

export const getStudentProfile = () =>
  authApi.get("student/profile").then((res) => res.data);

export const getMyNotifications = (username: string) => {
  if(!username) return;
  return authApi.get(`student/${username}/notifications`).then((res) => res.data);
}