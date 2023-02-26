import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const getStudentBooking = (email: string) => {
  if (!email) {
    return;
  }

  return api.get(`foro/?email=${email}`).then((res) => res.data);
};
