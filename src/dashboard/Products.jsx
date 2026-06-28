import { Link, useLoaderData } from "react-router-dom";

export default function Products() {
  const products = useLoaderData(); // 🔥 داده از Loader میاد

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <ul className="space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between bg-white shadow p-4 rounded"
          >
            <div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm">
                {product.price} دلار
              </p>
            </div>

            <Link
              to={`/dashboard/products/${product.id}`}
              className="text-blue-600 hover:underline"
            >
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
