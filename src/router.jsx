import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RootLayout from "./layouts/RootLayout";

import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import Orders from "./dashboard/Orders";
import Products from "./dashboard/Products";
import Settings from "./dashboard/Settings";
import ProductDetail from "./dashboard/ProductDetail";

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
          { path: "orders", element: <Orders /> },
          { path: "products", element: <Products /> },
          { path: "products/:id", element: <ProductDetail/> }, 
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
