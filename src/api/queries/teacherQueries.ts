import authApi from "../tokens/teacherInterceptor";

export const getTeacherProfile = () => authApi.get("teacher/profile").then((res) => res.data);

export const getMyBorrowedBooks = (username: string) => {
  if (!username) return;

  return authApi.get(`/booking/${username}`).then((res) => res.data);
};

export const getMyNotifications = (username: string) => {
  if(!username) return;

  return authApi.get(`/teacher/${username}/notifications`).then((res) => res.data);
}