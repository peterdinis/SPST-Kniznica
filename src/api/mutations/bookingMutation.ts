import axios from "axios";
import { IBooking } from "../interfaces/IBooking";

const baseEnv =
  process.env.NODE_ENV !== "production"
    ? (process.env.NEXT_PUBLIC_BACKEND_URL as string)
    : (process.env.NEXT_PUBLIC_PRODUCTION_URL as string);

const api = axios.create({
  baseURL: baseEnv,
});

export const borrowedBook = (
  data: IBooking
) => {

  return api.post(`booking/`, data);
};
