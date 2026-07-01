import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RootLayout from "./layouts/RootLayout";

import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import Orders from "./dashboard/Orders";
import Products from "./dashboard/Products";
import Settings from "./dashboard/Settings";
import ProductDetail from "./dashboard/ProductDetail";
import Profile from "./dashboard/Profile";

import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

import { products } from "./Data/products";
import { orders } from "./Data/orders";
import { settings } from "./Data/settings";
import ErrorBoundary from "./errors/ErrorBoundary";

export async function productDetailLoader({ params }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    throw new Error("این محصول وجود ندارد!");
  }

  return product;
}


// Loaders
export async function settingsLoader() {
  return settings;
}

export async function ordersLoader() {
  return orders;
}

export async function productsLoader() {
  return products;
  // throw new Error("محصولات پیدا نشد!");
}

export async function profileLoader() {
  return {
    username: "Nastaran",
    email: "nas@example.com",
  };
}

// Actions
export async function profileAction({ request }) {
  const formData = await request.formData();
  return {
    username: formData.get("username"),
    email: formData.get("email"),
  };
}

export async function settingsAction({ request }) {
  const formData = await request.formData();
  return { username: formData.get("username") };
}

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <h2>About Page</h2> },
      { path: "login", element: <Login /> },

      {
        path: "dashboard",
        element: <ProtectedRoute />,
        errorElement: <ErrorBoundary/>,
        children: [
          {
            element: <DashboardLayout />,
            errorElement: <ErrorBoundary />,
            children: [
              { index: true, element: <DashboardHome /> },

              { path: "orders", element: <Orders />, loader: ordersLoader ,errorElement: <ErrorBoundary />},
              { path: "products", element: <Products />, loader: productsLoader },
             {
  path: "products/:id",
  element: <ProductDetail />,
  loader: productDetailLoader,
  errorElement: <ErrorBoundary />,
},


              {
                path: "settings",
                element: <Settings />,
                loader: settingsLoader,
                action: settingsAction,
              },

              {
                path: "profile",
                element: <Profile />,
                loader: profileLoader,
                action: profileAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
