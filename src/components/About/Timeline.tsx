interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      year: "2020",
      title: "会社設立",
      description:
        "Clarity デモ株式会社を東京都渋谷区に設立。初期メンバー5名でスタート。",
    },
    {
      year: "2020",
      title: "初期製品リリース",
      description: "ベータ版の分析ツールをリリース。限定顧客向けに提供開始。",
    },
    {
      year: "2021",
      title: "資金調達",
      description:
        "シリーズAラウンドで3億円の資金調達に成功。製品開発とマーケティングを強化。",
    },
    {
      year: "2021",
      title: "正式版リリース",
      description: "正式版の分析ツールをリリース。多くの企業に導入される。",
    },
    {
      year: "2022",
      title: "チーム拡大",
      description: "従業員数が15名に拡大。新オフィスに移転。",
    },
    {
      year: "2022",
      title: "海外展開開始",
      description: "アジア太平洋地域への展開を開始。シンガポールに拠点を設立。",
    },
    {
      year: "2023",
      title: "新機能追加",
      description: "AI搭載の予測分析機能をリリース。業界から高い評価を獲得。",
    },
    {
      year: "2023",
      title: "業界賞受賞",
      description: "「最も革新的なアナリティクスツール」として業界賞を受賞。",
    },
    {
      year: "2024",
      title: "現在",
      description: "従業員数25名。次世代の分析プラットフォームの開発に注力中。",
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">会社沿革</h2>

        <div className="relative">
          {/* 中央の線 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } md:flex-row-reverse`}
              >
                {/* 年表示（モバイルでは常に左側、デスクトップでは交互） */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* 中央の丸 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>

                {/* コンテンツ（モバイルでは常に右側、デスクトップでは交互） */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:pr-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold bg-primary text-white px-2 py-1 rounded mr-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
