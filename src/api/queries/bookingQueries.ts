import axios from "axios";

const baseEnv = process.env.NEXT_PUBLIC_BACKEND_URL as unknown as string

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

  return api.get(`booking/${username}`).then((res) => res.data);
};