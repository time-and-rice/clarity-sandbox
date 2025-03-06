import { useState } from "react";
import Image from "next/image";
import Modal from "../UI/Modal";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

const TeamMembers = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const members: TeamMember[] = [
    {
      id: 1,
      name: "山田 太郎",
      position: "代表取締役",
      bio: "データ分析の専門家として15年以上の経験を持つ。前職ではグローバル企業のアナリティクス部門を統括。ユーザー行動分析の重要性に着目し、2020年に当社を設立。データを活用したビジネス成長に情熱を注いでいる。",
      image: "https://placehold.co/300x300/2a3f5a/white?text=CEO",
    },
    {
      id: 2,
      name: "佐藤 花子",
      position: "最高技術責任者",
      bio: "AIとデータサイエンスの分野で博士号を取得。複数のテック企業でエンジニアリングリーダーを務めた経験を持つ。当社の技術戦略を統括し、革新的な分析ツールの開発を主導している。",
      image: "https://placehold.co/300x300/3a4f6a/white?text=CTO",
    },
    {
      id: 3,
      name: "鈴木 一郎",
      position: "プロダクトマネージャー",
      bio: "ユーザー体験設計のスペシャリスト。複数のヒット製品の開発に携わった経験を持つ。顧客のニーズを深く理解し、それを製品機能に反映させることに長けている。",
      image: "https://placehold.co/300x300/4a5f7a/white?text=PM",
    },
    {
      id: 4,
      name: "田中 美咲",
      position: "マーケティングディレクター",
      bio: "デジタルマーケティングの分野で10年以上の経験を持つ。データ駆動型マーケティングのアプローチを得意とし、当社の成長戦略を担当している。",
      image: "https://placehold.co/300x300/5a6f8a/white?text=MD",
    },
  ];

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    // Clarityでのイベント追跡を想定
    console.log(`Team member clicked: ${member.name}`);
  };

  return (
    <section
      style={{ backgroundColor: "var(--color-light)" }}
      className="py-12"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">チームメンバー</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleMemberClick(member)}
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <Modal
            isOpen={!!selectedMember}
            onClose={() => setSelectedMember(null)}
            title={selectedMember.name}
          >
            <div className="space-y-4">
              <div className="relative h-64 w-full">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl font-semibold">
                {selectedMember.position}
              </h3>
              <p>{selectedMember.bio}</p>
              <button
                className="btn btn-primary w-full"
                onClick={() => setSelectedMember(null)}
              >
                閉じる
              </button>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default TeamMembers;
