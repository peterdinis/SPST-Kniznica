import axios from "axios";
import authApi from "../tokens/studentInterceptor";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const getAllBookings = () => api.get("bookings").then((res) => res.data);

export const getBookingInfo = (id: string) => {
  if (!id) {
    return;
  }

  return api.get(`booking/${id}`).then((res) => res.data);
};

export const getMyBorrowedBooks = (username: string) => {
  if (!username) return;

  return authApi.get(`/booking/${username}`).then((res) => res.data);
};
