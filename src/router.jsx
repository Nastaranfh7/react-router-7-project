import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RootLayout from "./layouts/RootLayout";

import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import Orders from "./dashboard/Orders";
import Products from "./dashboard/Products";
import Settings from "./dashboard/Settings";
import ProductDetail from "./dashboard/ProductDetail";

import { products } from "./Data/products";
import { orders } from "./Data/orders";
import { settings } from "./Data/settings";   // ✔ دادهٔ Settings

// ✔ Loader برای Settings
export async function settingsLoader() {
  return settings;
}

// ✔ Loader برای Orders
export async function ordersLoader() {
  return orders;
}

// ✔ Loader برای Products
export async function productsLoader() {
  return products;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <h2>About Page</h2> },

      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardHome /> },

          {
            path: "orders",
            element: <Orders />,
            loader: ordersLoader,
          },

          {
            path: "products",
            element: <Products />,
            loader: productsLoader,
          },

          {
            path: "products/:id",
            element: <ProductDetail />,
          },

          {
            path: "settings",
            element: <Settings />,
            loader: settingsLoader,
          },
        ],
      },
    ],
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
