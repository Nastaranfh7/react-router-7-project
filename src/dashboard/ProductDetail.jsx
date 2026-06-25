import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">محصول پیدا نشد</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <p className="text-gray-700 mb-2">
        قیمت: <span className="font-semibold">{product.price} دلار</span>
      </p>

      <p className="text-gray-600 mb-6">{product.description}</p>

      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add to cart
      </button>
    </div>
  );
}
