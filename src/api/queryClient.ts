import { QueryClient } from "@tanstack/react-query";
import { queryCache } from "./cache/queryCache";
import { mutationCache } from "./cache/mutationCache";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
    mutations: {
      networkMode: "offlineFirst",
    },
  },
  logger: {
    log: (...args) => {
      console.log(...args);
      console.log("Log info");
    },
    warn: (...args) => {
      console.log(...args);
      console.log("Warn info");
    },
    error: (...args) => {
      console.log(...args);
      console.log("Error info");
    },
  },
});

/* export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
 */