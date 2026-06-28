import { useLoaderData } from "react-router-dom";

export default function Orders() {
  const orders = useLoaderData(); // 🔥 داده از Loader میاد

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      <ul className="space-y-3">
        {orders.map((order) => (
          <li
            key={order.id}
            className="bg-white shadow p-4 rounded flex justify-between"
          >
            <span>{order.customer}</span>
            <span className="font-semibold">${order.total}</span>
            <span className="text-gray-600">{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
