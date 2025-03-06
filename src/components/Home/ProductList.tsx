import { useState } from "react";
import Image from "next/image";
import Modal from "../UI/Modal";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "プレミアムプラン",
      price: 9800,
      description: "全機能が利用可能な最上位プラン。優先サポート付き。",
      image: "https://placehold.co/500x300/gold/white?text=Premium",
    },
    {
      id: 2,
      name: "スタンダードプラン",
      price: 4800,
      description: "一般的な利用に最適な標準プラン。主要機能を全て利用可能。",
      image: "https://placehold.co/500x300/silver/white?text=Standard",
    },
    {
      id: 3,
      name: "ベーシックプラン",
      price: 1980,
      description: "必要最低限の機能を利用できるエントリープラン。",
      image: "https://placehold.co/500x300/blue/white?text=Basic",
    },
    {
      id: 4,
      name: "フリープラン",
      price: 0,
      description: "無料で利用できる基本プラン。機能制限あり。",
      image: "https://placehold.co/500x300/gray/white?text=Free",
    },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct((prev) => {
      return prev?.id === product.id ? null : product;
    });
    // Clarityでのイベント追跡を想定
    console.log(`Product clicked: ${product.name}`);
  };

  return (
    <section id="products" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">プラン一覧</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    {product.price === 0
                      ? "無料"
                      : `¥${product.price.toLocaleString()}`}
                  </span>
                  <button className="btn btn-sm btn-primary">詳細</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <Modal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            title={`プラン詳細: ${selectedProduct.name}`}
          >
            <div className="space-y-4">
              <div className="relative h-48 w-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-lg font-bold mb-2">
                  価格:{" "}
                  {selectedProduct.price === 0
                    ? "無料"
                    : `¥${selectedProduct.price.toLocaleString()}`}
                </p>
                <p className="mb-4">{selectedProduct.description}</p>
                <div className="mt-4 flex space-x-4">
                  <button
                    className="btn btn-primary flex-1"
                    onClick={() =>
                      console.log(`申し込み: ${selectedProduct.name}`)
                    }
                  >
                    申し込む
                  </button>
                  <button
                    className="btn btn-outline flex-1"
                    onClick={() => setSelectedProduct(null)}
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProductList;
