import { ICreateBooking, IReturnBooking } from "@/interfaces/IBooking";
import axios from "axios";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const createNewBooking = (data: ICreateBooking) => {
  return api.post("booking", data);
};

// TODO: Type fix later
export const returnBooking = (data: any) => {
  return api.delete("student/booking/return", data);
};
