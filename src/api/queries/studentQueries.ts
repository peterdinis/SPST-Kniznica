import authApi from "../lib/studentInterceptor";

export const getStudentProfile = () =>
  authApi.get("student/profile").then((res) => res.data);

export const getMyBorrowedBooks = (username: string) => {
  if (!username) return;

  return authApi.get(`me/booking/${username}`).then((res) => res.data);
};
