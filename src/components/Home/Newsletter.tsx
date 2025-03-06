import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 簡易的なバリデーション
    if (!email || !email.includes("@")) {
      setError("有効なメールアドレスを入力してください");
      return;
    }

    // 実際のプロジェクトではAPIリクエストを送信
    console.log("Newsletter subscription:", email);
    setIsSubmitted(true);
    setError("");
    setEmail("");
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">ニュースレターを購読する</h2>
          <p className="text-lg mb-8">
            最新の機能アップデートや活用事例を定期的にお届けします。
            いつでも購読解除できます。
          </p>

          {isSubmitted ? (
            <div className="bg-white text-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">ありがとうございます！</h3>
              <p>ニュースレターの購読が完了しました。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレスを入力"
                    className="flex-grow px-4 py-3 rounded-md text-dark"
                    aria-label="メールアドレス"
                  />
                  <button
                    type="submit"
                    className="btn btn-accent whitespace-nowrap"
                  >
                    購読する
                  </button>
                </div>
                {error && <p className="mt-2 text-red-300">{error}</p>}
              </div>

              <div className="text-sm">
                <label className="flex items-center justify-center gap-2">
                  <div className="flex-0 flex  justify-center">
                    <input type="checkbox" className="rounded" />
                  </div>
                  プライバシーポリシーに同意します
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
