import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const studentProfile = api
  .get("student/profile")
  .then((res) => res.data);

export const getMyBorrowedBooks = (id: number | string) => {
  if (!id || id === undefined || id === null) {
    alert("Id Študenta nebolo nájdené");
    return;                
  }

  return api.get(`booking/me/${id}`).then((res) => res.data);
};

export const checkEmailInDatabase = (email: string) => {
  if(!email || email === undefined || email === null) {
    alert("Email nebol najdený");
    return;
  }

  return api.get(`/student/${email}/check`).then((res) => res.data);
}
