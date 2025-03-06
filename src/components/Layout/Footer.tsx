import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clarity Demo</h3>
            <p className="mb-4">
              Microsoft Clarityの動作検証用デモサイトです。
              様々なユーザーインタラクションを分析できます。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  会社情報
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="mb-2">〒123-4567</p>
            <p className="mb-2">東京都渋谷区〇〇町1-2-3</p>
            <p className="mb-2">電話: 03-1234-5678</p>
            <p>メール: info@example.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Clarity Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
