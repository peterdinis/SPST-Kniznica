import FallbackLoader from "@/components/shared/FallbackLoader";
import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Suspense>
  );
}
