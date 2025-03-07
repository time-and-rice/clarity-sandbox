import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const clarityEnabledPaths = ["/"];

const shouldClarityBeEnabled = (pathname: string) => {
  return clarityEnabledPaths.includes(pathname);
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname, shouldClarityBeEnabled(router.pathname));
  }, [router.pathname]);

  return (
    <>
      {shouldClarityBeEnabled(router.pathname) && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `,
          }}
        />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
