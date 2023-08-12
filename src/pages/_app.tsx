import "@/styles/main.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/api/queryClient";
import { Montserrat } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "@/components/shared/errors/GlobalBoundary";
import {  Layout } from "@/components/shared";
import { ChakraProvider } from "@chakra-ui/react";
import { montserrat } from "./font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={montserrat.className}>
        <ChakraProvider>
          <Layout>
            <ErrorBoundary>
              <Component {...pageProps} />
              <ToastContainer />
              <ReactQueryDevtools />
            </ErrorBoundary>
          </Layout>
        </ChakraProvider>
      </div>
    </QueryClientProvider>
  );
}
