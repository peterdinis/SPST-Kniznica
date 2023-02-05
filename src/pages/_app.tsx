import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/api/queryClient";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "@next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider {...pageProps}>
        <div className={inter.className}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
            <ReactQueryDevtools />
          </Layout>
        </div>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
