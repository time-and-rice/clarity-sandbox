import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // FormDataを使用した非制御フォーム
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      // バリデーション
      if (!name || !email || !message) {
        throw new Error("すべての項目を入力してください");
      }

      if (!email.includes("@")) {
        throw new Error("有効なメールアドレスを入力してください");
      }

      // 実際のプロジェクトではAPIリクエストを送信
      console.log("Contact form submission:", { name, email, message });

      // 送信成功
      setIsSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("送信中にエラーが発生しました");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>お問い合わせ | Microsoft Clarity デモサイト</title>
        <meta
          name="description"
          content="Clarity デモ株式会社へのお問い合わせはこちらから。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="py-10 bg-primary text-white">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">お問い合わせ</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  お問い合わせありがとうございます
                </h2>
                <p className="text-green-700 mb-6">
                  メッセージを受け付けました。担当者より折り返しご連絡いたします。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  新しいお問い合わせ
                </button>
              </div>
            ) : (
              <>
                <p className="text-center mb-8">
                  以下のフォームに必要事項をご入力の上、送信ボタンをクリックしてください。
                  担当者より折り返しご連絡いたします。
                </p>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="flex items-center justify-center gap-2">
                      <div className="flex-0 flex justify-center">
                        <input type="checkbox" name="privacy" required />
                      </div>
                      <span className="text-sm">
                        プライバシーポリシーに同意します
                      </span>
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "送信中..." : "送信する"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "var(--color-light)" }}
        className="py-12"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              その他のお問い合わせ方法
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4 text-primary">📞</div>
                <h3 className="text-xl font-semibold mb-2">お電話</h3>
                <p>03-1234-5678</p>
                <p className="text-sm text-gray-500">（平日 9:00〜18:00）</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4 text-primary">✉️</div>
                <h3 className="text-xl font-semibold mb-2">メール</h3>
                <p>info@example.com</p>
                <p className="text-sm text-gray-500">（24時間受付）</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4 text-primary">🏢</div>
                <h3 className="text-xl font-semibold mb-2">オフィス</h3>
                <p>東京都渋谷区〇〇町1-2-3</p>
                <p className="text-sm text-gray-500">（最寄駅：渋谷駅）</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
