import { useState } from "react";
import Modal from "../UI/Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Microsoft Clarity デモサイト
          </h1>
          <p className="text-xl mb-8">
            ユーザー行動分析ツールの動作検証用サイトです。
            様々なインタラクション要素を試してみてください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="btn btn-accent"
              onClick={() => setIsModalOpen(true)}
            >
              詳細を見る
            </button>
            <a
              href="#products"
              className="btn bg-white text-primary hover:bg-white/90"
            >
              商品を見る
            </a>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Microsoft Clarityについて"
      >
        <div>
          <p className="mb-4">
            Microsoft
            Clarityは、ウェブサイトのユーザー行動を分析するための無料ツールです。
            ヒートマップ、セッション録画、ファネル分析などの機能を提供しています。
          </p>
          <p className="mb-4">
            このデモサイトでは、Clarityで追跡できる様々なユーザーインタラクションを
            試すことができます。
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>クリック追跡</li>
            <li>スクロール深度</li>
            <li>フォーム入力</li>
            <li>ページ遷移</li>
            <li>エラー追跡</li>
          </ul>
          <button
            className="btn btn-primary w-full"
            onClick={() => setIsModalOpen(false)}
          >
            閉じる
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
