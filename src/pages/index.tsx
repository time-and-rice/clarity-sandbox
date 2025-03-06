import Head from "next/head";
import Hero from "@/components/Home/Hero";
import TabContent from "@/components/Home/TabContent";
import ProductList from "@/components/Home/ProductList";
import Newsletter from "@/components/Home/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Microsoft Clarity デモサイト</title>
        <meta
          name="description"
          content="Microsoft Clarityの動作検証用デモサイト"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <TabContent />
      <ProductList />
      <Newsletter />
    </>
  );
}
