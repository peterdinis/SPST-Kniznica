import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const teacherInfo = async (email: string) => {
  const res = await api.get(`teacher/:${email}`);
  return res.data;
}