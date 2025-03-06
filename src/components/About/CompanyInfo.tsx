import Tabs from "../UI/Tabs";

const CompanyInfo = () => {
  const tabs = [
    {
      id: "overview",
      label: "会社概要",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">会社概要</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <InfoRow label="会社名" value="Clarity デモ株式会社" />
                  <InfoRow label="設立" value="2020年4月1日" />
                  <InfoRow label="資本金" value="1,000万円" />
                  <InfoRow label="代表者" value="山田 太郎" />
                  <InfoRow label="従業員数" value="25名" />
                  <InfoRow label="所在地" value="東京都渋谷区〇〇町1-2-3" />
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">事業内容</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>ウェブサイト分析ツールの開発・販売</li>
                <li>ユーザー行動分析コンサルティング</li>
                <li>ウェブサイト最適化サービス</li>
                <li>データ分析ワークショップの開催</li>
                <li>UX/UIデザインサービス</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "mission",
      label: "ミッション",
      content: (
        <div className="space-y-6">
          <div
            style={{ backgroundColor: "var(--color-light)" }}
            className="p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">ミッション</h3>
            <p className="text-lg">
              「データを通じて、より良いユーザー体験を創造する」
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">私たちの目指すもの</h3>
            <p className="mb-4">
              Clarity
              デモ株式会社は、ウェブサイトやアプリケーションのユーザー体験を向上させるために、
              データ駆動型のアプローチを提供しています。ユーザーの行動を理解し、それに基づいて
              意思決定を行うことで、より良い製品やサービスを提供することを目指しています。
            </p>
            <p>
              私たちは、データの力を活用して、企業とユーザーの間のギャップを埋め、
              双方にとって価値のある関係を構築するお手伝いをします。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">3つの価値観</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ValueCard
                title="データ重視"
                description="感覚や憶測ではなく、実際のデータに基づいた意思決定を大切にします。"
              />
              <ValueCard
                title="ユーザー中心"
                description="すべての取り組みの中心には、常にユーザーの存在があります。"
              />
              <ValueCard
                title="継続的改善"
                description="完璧を目指すのではなく、常に改善し続けることを重視します。"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "philosophy",
      label: "経営理念",
      content: (
        <div className="space-y-6">
          <blockquote className="italic text-xl border-l-4 border-primary pl-4 py-2">
            「データは単なる数字ではなく、その背後にある人間の行動や思考を表しています。
            私たちは、そのデータを通じて人々の声に耳を傾け、より良い体験を提供することを目指しています。」
            <footer className="text-right mt-2">- 代表取締役 山田 太郎</footer>
          </blockquote>

          <div>
            <h3 className="text-xl font-semibold mb-4">経営理念</h3>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>透明性の追求</strong>
                <p>
                  データ収集と分析において、常に透明性を保ち、ユーザーのプライバシーを尊重します。
                </p>
              </li>
              <li>
                <strong>価値の創造</strong>
                <p>
                  単なるデータ収集ではなく、そこから意味のある洞察を導き出し、実際の価値を創造します。
                </p>
              </li>
              <li>
                <strong>共創の精神</strong>
                <p>
                  クライアントとの協力関係を大切にし、共に成長することを目指します。
                </p>
              </li>
              <li>
                <strong>革新への挑戦</strong>
                <p>
                  常に新しい技術やアプローチに挑戦し、業界の発展に貢献します。
                </p>
              </li>
            </ol>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">会社情報</h2>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <tr className="border-b border-gray-200">
    <th className="py-3 text-left font-medium">{label}</th>
    <td className="py-3">{value}</td>
  </tr>
);

const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CompanyInfo;
