import Accordion from "../UI/Accordion";

const FAQ = () => {
  const faqItems = [
    {
      id: "faq-1",
      title: "Microsoft Clarityとは何ですか？",
      content: (
        <div>
          <p>
            Microsoft
            Clarityは、ウェブサイトのユーザー行動を分析するための無料ツールです。
            ヒートマップ、セッション録画、クリック分析などの機能を提供し、
            ユーザーがウェブサイト上でどのように行動しているかを理解するのに役立ちます。
          </p>
        </div>
      ),
    },
    {
      id: "faq-2",
      title: "Clarityは無料で利用できますか？",
      content: (
        <div>
          <p>
            はい、Microsoft Clarityは完全に無料で利用できます。
            トラフィック量や機能に制限はなく、企業規模に関わらず利用可能です。
          </p>
        </div>
      ),
    },
    {
      id: "faq-3",
      title: "Clarityの導入方法は？",
      content: (
        <div>
          <p>Clarityの導入は非常に簡単です。以下の手順で行います：</p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Microsoft Clarityのウェブサイトでアカウントを作成</li>
            <li>新しいプロジェクトを作成</li>
            <li>提供されるJavaScriptタグをコピー</li>
            <li>ウェブサイトの&lt;head&gt;タグ内にコードを貼り付け</li>
            <li>数分後にデータの収集が開始される</li>
          </ol>
        </div>
      ),
    },
    {
      id: "faq-4",
      title: "Clarityはプライバシーに配慮していますか？",
      content: (
        <div>
          <p>
            はい、Clarityはユーザーのプライバシーを重視しています。
            個人を特定できる情報（PII）は自動的にマスクされ、
            パスワードフィールドやクレジットカード情報などの機密データは記録されません。
            また、GDPRやCCPAなどのプライバシー規制に準拠しています。
          </p>
        </div>
      ),
    },
    {
      id: "faq-5",
      title: "Clarityで何が分析できますか？",
      content: (
        <div>
          <p>Clarityでは以下のような分析が可能です：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>ヒートマップ（クリック、スクロール、移動）</li>
            <li>セッション録画</li>
            <li>クリック率分析</li>
            <li>デッドクリック（反応のないクリック）の特定</li>
            <li>フォーム放棄の分析</li>
            <li>ページ間の移動パターン</li>
            <li>JavaScriptエラーの検出</li>
          </ul>
        </div>
      ),
    },
    {
      id: "faq-6",
      title: "他の分析ツールと併用できますか？",
      content: (
        <div>
          <p>
            はい、ClarityはGoogle AnalyticsやAdobe Analyticsなど、
            他の分析ツールと併用することができます。
            実際、これらのツールと組み合わせることで、
            より包括的なユーザー行動の理解が可能になります。
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      style={{ backgroundColor: "var(--color-light)" }}
      className="py-12"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">よくある質問</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
