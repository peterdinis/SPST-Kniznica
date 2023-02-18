import axios from "axios";
import { ICategory } from "../interfaces/ICategory";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string

const api = axios.create({
  baseURL: baseEnv
});

export const createNewCategory = (data: ICategory) => {
    return api.post("category", data);
}