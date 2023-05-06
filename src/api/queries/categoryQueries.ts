import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string
});

export const getCategories = () => api.get("categories").then((res) => res.data);

export const getOneCategory = (externalId: string) => {
  if (!externalId) {
    return;
  }

  return api.get(`category/${externalId}`).then((res) => res.data);
};

export const paginateCategories = (page: number, limit: number) => {
  return api.get(`categories/paginate?page=${page}&limit=${limit}`)
}

