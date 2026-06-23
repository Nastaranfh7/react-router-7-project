import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "dashboard", element: <Dashboard /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
