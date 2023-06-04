import { ICreateBooking, IReturnBooking } from "@/interfaces/IBooking";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const createNewBooking = (data: ICreateBooking) => {
  return api.post("booking", data);
};

export const returnBooking = (data: IReturnBooking) => {
  return api.patch("booking/return", data);
};
