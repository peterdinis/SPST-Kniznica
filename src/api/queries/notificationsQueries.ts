import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string
});

export const getAllNotifications = () => api.get("notifications").then((res) => res.data);

export const getMyNotifications = (username: string) => {
  if(!username) return;

  return api.get(`notifications/${username}`);
}