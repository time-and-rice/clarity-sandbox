import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Clarity Demo
        </Link>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          <NavLinks />
        </nav>
      </div>

      {/* モバイルナビゲーション */}
      {isMenuOpen && (
        <div className="md:hidden container pb-4">
          <nav className="flex flex-col space-y-4">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link
        href="/"
        className="font-medium hover:text-primary transition-colors"
      >
        ホーム
      </Link>
      <Link
        href="/about"
        className="font-medium hover:text-primary transition-colors"
      >
        会社情報
      </Link>
      <Link
        href="/contact"
        className="font-medium hover:text-primary transition-colors"
      >
        お問い合わせ
      </Link>
    </>
  );
};

export default Header;
