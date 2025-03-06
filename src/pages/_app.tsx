import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Microsoft Clarityの初期化コードをここに追加
    // 実際のプロジェクトでは、Clarityのスクリプトをここに追加します
    console.log("Microsoft Clarity would be initialized here");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
