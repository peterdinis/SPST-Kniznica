import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
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

export const paginateBooking = (page: number, limit: number) => {
  return api.get(`booking/paginate?page=${page}&limit=${limit}`)
}

