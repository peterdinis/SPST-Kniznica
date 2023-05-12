import {
  QueryFunctionContext,
  UseQueryOptions,
  useQuery,
  QueryKey,
} from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKey>
) => {
  const context = useQuery<T, Error, T, QueryKey>(
    [url!, params],
    ({ queryKey }) => fetcher({ queryKey }),
    {
      enabled: !!url,
      ...config,
    }
  );

  return context;
};

export const fetcher = async <T>({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKey> | any): Promise<T> => {
  const [url, params] = queryKey;
  const res = await api.get<T>(url, { params: { ...params, pageParam } });
  return res.data;
};
