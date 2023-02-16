import { QueryClient } from "@tanstack/react-query";
import { queryCache } from "./cache/queryCache";
import { mutationCache } from "./cache/mutationCache";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: twentyFourHoursInMs
    },
    mutations: {
      networkMode: "offlineFirst",
    },
  }
});