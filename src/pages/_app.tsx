import FallbackLoader from "@/components/shared/FallbackLoader";
import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  );
}
