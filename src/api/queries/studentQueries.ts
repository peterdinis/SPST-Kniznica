import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const studentInfo = async (email: string) => {
  const res = await api.get(`student/:${email}`);
  return res.data;
}