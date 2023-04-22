import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string
});

export const getBooks = () => api.get("books").then((res) => res.data);

export const getOneBook = (externalId: string) => {
  if (!externalId) {
    return;
  }

  return api.get(`book/${externalId}`).then((res) => res.data);
};


export const searchForBooks = (value: string) => {
  return api.get(`books/search?q=${value}`)
}

export const paginateBooks = (page: number, limit: number) => {
  return api.get(`books/paginate?page=${page}&limit=${limit}`)
}

