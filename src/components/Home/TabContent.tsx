import Tabs from "../UI/Tabs";

const TabContent = () => {
  const tabs = [
    {
      id: "features",
      label: "機能",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="ヒートマップ"
            description="ユーザーのクリック、スクロール、移動の傾向を視覚化します。"
            icon="🔥"
          />
          <FeatureCard
            title="セッション録画"
            description="実際のユーザー行動を録画して、UXの問題を特定します。"
            icon="📹"
          />
          <FeatureCard
            title="インサイト"
            description="AIを活用した分析で、改善すべき点を自動的に検出します。"
            icon="💡"
          />
        </div>
      ),
    },
    {
      id: "benefits",
      label: "メリット",
      content: (
        <div className="space-y-4">
          <BenefitItem
            title="無料で利用可能"
            description="Microsoft Clarityは完全無料で利用できます。トラフィック制限もありません。"
          />
          <BenefitItem
            title="簡単な導入"
            description="JavaScriptタグを追加するだけで、すぐに分析を開始できます。"
          />
          <BenefitItem
            title="プライバシー重視"
            description="個人を特定できる情報は自動的にマスクされ、GDPRにも準拠しています。"
          />
          <BenefitItem
            title="他ツールとの連携"
            description="Google AnalyticsやAzure Insightsなど、他の分析ツールと連携できます。"
          />
        </div>
      ),
    },
    {
      id: "use-cases",
      label: "活用例",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UseCaseCard
            title="コンバージョン率の改善"
            description="ユーザーが離脱するポイントを特定し、フォームの完了率を向上させます。"
          />
          <UseCaseCard
            title="UXの最適化"
            description="ユーザーが混乱している箇所や、フラストレーションを感じている部分を発見します。"
          />
          <UseCaseCard
            title="A/Bテストの検証"
            description="異なるデザインバージョンでのユーザー行動の違いを比較分析します。"
          />
          <UseCaseCard
            title="エラーの検出"
            description="JavaScriptエラーやレイアウトの崩れなど、技術的な問題を特定します。"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      style={{ backgroundColor: "var(--color-light)" }}
      className="py-16"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">
          Microsoft Clarityの特徴
        </h2>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

interface CardProps {
  title: string;
  description: string;
}

interface FeatureCardProps extends CardProps {
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitItem = ({ title, description }: CardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const UseCaseCard = ({ title, description }: CardProps) => (
  <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:border-primary transition-colors">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default TabContent;
