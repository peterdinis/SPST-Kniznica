import FallbackLoader from "@/components/shared/FallbackLoader";
import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import {  QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from "@/api/queryClient";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Layout>
      </QueryClientProvider>
    </Suspense>
  );
}
