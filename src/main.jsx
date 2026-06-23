import { createBrowserRouter , RouterProvider } from "react-router"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import RootLayout from "./layouts/RootLayout";

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
export default function app(){
  return < RouterProvider router={router}/>
}
 






// createBrowserRouter([...])
// این Router را به صورت یک آبجکت می‌سازد.

// دیگر <Routes> و <Route> وجود ندارد.

// همهٔ مسیرها در یک آرایه تعریف می‌شوند.


// createBrowserRouter([...])
// این Router را به صورت یک آبجکت می‌سازد.

// دیگر <Routes> و <Route> وجود ندارد.

// همهٔ مسیرها در یک آرایه تعریف می‌شوند.