import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const getMyBorrowedBooks = (username: string) => {
  if (!username || username === undefined || username === null) {
    alert("Používateľské meno nebolo nájdené");
    return;                
  }

  return api.get(`booking/me/${username}`).then((res) => res.data);
};

export const checkEmailInDatabase = (email: string) => {
  if(!email || email === undefined || email === null) {
    alert("Email nebol najdený");
    return;
  }

  return api.get(`/student/${email}/check`).then((res) => res.data);
}
