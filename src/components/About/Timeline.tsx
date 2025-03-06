import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaChartLine,
  FaCoins,
  FaTools,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "foundation" | "product" | "funding" | "growth" | "award" | "current";
  metrics?: {
    label: string;
    value: string;
  };
  important?: boolean;
}

const Timeline = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>([]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case "foundation":
        return <FaBuilding className="text-primary" />;
      case "product":
        return <FaTools className="text-primary" />;
      case "funding":
        return <FaCoins className="text-yellow-500" />;
      case "growth":
        return <FaUsers className="text-green-500" />;
      case "award":
        return <FaTrophy className="text-yellow-600" />;
      case "current":
        return <FaChartLine className="text-blue-500" />;
      default:
        return <FaBuilding className="text-primary" />;
    }
  };

  const events: TimelineEvent[] = [
    {
      year: "2020",
      title: "会社設立",
      description:
        "Clarity デモ株式会社を東京都渋谷区に設立。初期メンバー5名でスタート。",
      type: "foundation",
      metrics: {
        label: "社員数",
        value: "5名",
      },
      important: true,
    },
    {
      year: "2020",
      title: "初期製品リリース",
      description: "ベータ版の分析ツールをリリース。限定顧客向けに提供開始。",
      type: "product",
    },
    {
      year: "2021",
      title: "資金調達",
      description:
        "シリーズAラウンドで3億円の資金調達に成功。製品開発とマーケティングを強化。",
      type: "funding",
      metrics: {
        label: "調達額",
        value: "3億円",
      },
      important: true,
    },
    {
      year: "2021",
      title: "正式版リリース",
      description: "正式版の分析ツールをリリース。多くの企業に導入される。",
      type: "product",
    },
    {
      year: "2022",
      title: "チーム拡大",
      description: "従業員数が15名に拡大。新オフィスに移転。",
      type: "growth",
      metrics: {
        label: "社員数",
        value: "15名",
      },
    },
    {
      year: "2022",
      title: "海外展開開始",
      description: "アジア太平洋地域への展開を開始。シンガポールに拠点を設立。",
      type: "growth",
      important: true,
    },
    {
      year: "2023",
      title: "新機能追加",
      description: "AI搭載の予測分析機能をリリース。業界から高い評価を獲得。",
      type: "product",
    },
    {
      year: "2023",
      title: "業界賞受賞",
      description: "「最も革新的なアナリティクスツール」として業界賞を受賞。",
      type: "award",
    },
    {
      year: "2024",
      title: "現在",
      description: "従業員数25名。次世代の分析プラットフォームの開発に注力中。",
      type: "current",
      metrics: {
        label: "社員数",
        value: "25名",
      },
      important: true,
    },
  ];

  useEffect(() => {
    setIsVisible(new Array(events.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setIsVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".timeline-event").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-14 relative">
          <span className="inline-block relative">
            会社沿革
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></span>
          </span>
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-primary via-blue-400 to-blue-500 rounded-full"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-event relative transition-all duration-700 ${
                  isVisible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${event.important ? "scale-105" : ""}`}
              >
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary z-10 shadow-lg items-center justify-center">
                  {getEventIcon(event.type)}
                </div>

                <div className="flex flex-col lg:flex-row items-center w-full">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-full lg:w-1/2 pr-6 lg:pr-16 lg:text-right">
                        <div
                          className={`
                            bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl 
                            border-l-4 lg:border-r-4 lg:border-l-0 ${
                              event.important
                                ? "border-primary"
                                : "border-gray-200"
                            }
                            transform hover:-translate-y-1
                          `}
                        >
                          <div className="flex flex-row lg:flex-row-reverse items-start mb-3">
                            <div className="mr-4 lg:ml-4 lg:mr-0 mt-1 hidden sm:block">
                              {getEventIcon(event.type)}
                            </div>
                            <div className="lg:text-right">
                              <div className="flex flex-wrap lg:flex-row-reverse items-center mb-2">
                                <span className="text-sm font-bold bg-gradient-to-r from-primary to-blue-500 text-white px-3 py-1 rounded-full mr-3 lg:ml-3 lg:mr-0 shadow-sm">
                                  {event.year}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800">
                                  {event.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed text-left">
                                {event.description}
                              </p>

                              {event.metrics && (
                                <div className="mt-4 bg-gray-50 rounded-lg p-3 border-l-2 lg:border-r-2 lg:border-l-0 border-primary">
                                  <div className="flex items-center lg:flex-row-reverse">
                                    <div className="font-bold text-gray-800">
                                      {event.metrics.value}
                                    </div>
                                    <div className="text-primary font-medium mr-2 lg:ml-2 lg:mr-0">
                                      {event.metrics.label}:
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:block lg:w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block lg:w-1/2"></div>
                      <div className="w-full lg:w-1/2 pl-6 lg:pl-16">
                        <div
                          className={`
                            bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl 
                            border-l-4 ${
                              event.important
                                ? "border-primary"
                                : "border-gray-200"
                            }
                            transform hover:-translate-y-1
                          `}
                        >
                          <div className="flex items-start mb-3">
                            <div className="mr-4 mt-1 hidden sm:block">
                              {getEventIcon(event.type)}
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center mb-2">
                                <span className="text-sm font-bold bg-gradient-to-r from-primary to-blue-500 text-white px-3 py-1 rounded-full mr-3 shadow-sm">
                                  {event.year}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800">
                                  {event.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed">
                                {event.description}
                              </p>

                              {event.metrics && (
                                <div className="mt-4 bg-gray-50 rounded-lg p-3 border-l-2 border-primary">
                                  <div className="flex items-center">
                                    <div className="text-primary font-medium mr-2">
                                      {event.metrics.label}:
                                    </div>
                                    <div className="font-bold text-gray-800">
                                      {event.metrics.value}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
