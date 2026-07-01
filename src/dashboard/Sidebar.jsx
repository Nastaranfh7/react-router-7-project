import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-56 bg-white shadow-lg p-6 min-h-screen">
      <h3 className="text-xl font-semibold mb-6">Menu</h3>

      <nav className="flex flex-col gap-4 text-lg">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Settings
        </NavLink>

        {/* ✔ لینک درست Profile */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Profile
        </NavLink>

      </nav>
    </div>
  );
}
