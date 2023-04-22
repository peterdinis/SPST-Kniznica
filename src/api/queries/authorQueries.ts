import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const getAuthors = () => api.get("authors").then((res) => res.data);

export const getOneAuthor = (externalId: string) => {
  if (!externalId) {
    return;
  }

  return api.get(`authors/${externalId}`).then((res) => res.data);
};

export const searchForAuthors = (value: string) => {
  return api.get(`authors/search?q=${value}`);
};

export const paginateAuthors = (page: number, limit: number) => {
  return api.get(`authors/paginate?page=${page}&limit=${limit}`)
}