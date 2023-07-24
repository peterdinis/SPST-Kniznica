import { Suspense } from "react";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/api/queryClient";
import { Montserrat } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@mui/material/CssBaseline";
import ErrorBoundary from "@/components/shared/errors/GlobalBoundary";
import { FallbackLoader, Layout } from "@/components/shared";
import { ChakraProvider } from '@chakra-ui/react'

const roboto = Montserrat({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FallbackLoader />}>
        <div className={roboto.className}>
          <ChakraProvider>
            <Layout>
              <ErrorBoundary>
                <Component {...pageProps} />
                <ToastContainer />
                <ReactQueryDevtools />
                <CssBaseline />
              </ErrorBoundary>
            </Layout>
          </ChakraProvider>
        </div>
      </Suspense>
    </QueryClientProvider>
  );
}
