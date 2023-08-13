import { QueryClient } from "@tanstack/react-query";
import { queryCache } from "./cache/queryCache";
import { mutationCache } from "./cache/mutationCache";
import { twentyFourHoursInMs } from "@/constants/queryHelper";

export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      staleTime: twentyFourHoursInMs,
    },
    mutations: {
      networkMode: "offlineFirst",
    },
  },
});