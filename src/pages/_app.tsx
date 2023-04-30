import Layout from "@/components/shared/Layout";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/api/queryClient";
import { Inter } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-get-file/dist/filepond-plugin-get-file.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import CssBaseline from "@mui/material/CssBaseline";
import { FontDiv } from "@/styles/Component.styled";
import ErrorBoundary from "@/components/shared/errors/GlobalBoundary";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <FontDiv className={inter.className}>
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
            <ToastContainer />
            <ReactQueryDevtools />
            <CssBaseline />
          </ErrorBoundary>
        </Layout>
      </FontDiv>
    </QueryClientProvider>
  );
}
