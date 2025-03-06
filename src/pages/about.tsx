import Head from "next/head";
import CompanyInfo from "@/components/About/CompanyInfo";
import TeamMembers from "@/components/About/TeamMembers";
import Timeline from "@/components/About/Timeline";
import FAQ from "@/components/About/FAQ";

export default function About() {
  return (
    <>
      <Head>
        <title>会社情報 | Microsoft Clarity デモサイト</title>
        <meta
          name="description"
          content="Clarity デモ株式会社の会社情報、チームメンバー、沿革、よくある質問をご紹介します。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="py-10 bg-primary text-white">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">会社情報</h1>
        </div>
      </div>

      <CompanyInfo />
      <TeamMembers />
      <Timeline />
      <FAQ />
    </>
  );
}
