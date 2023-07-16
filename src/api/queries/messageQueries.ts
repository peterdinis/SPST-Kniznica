import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const getAllMessages = () =>
  api.get("messages/all").then((res) => res.data);

export const getMessageDetail = (id: number) => {
  if (!id) return;

  return api.get(`message/${id}`).then((res) => res.data);
};
