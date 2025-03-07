import Layout from "@/components/Layout/Layout";
import { useClarity } from "@/hooks/useClarity";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useClarity();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
