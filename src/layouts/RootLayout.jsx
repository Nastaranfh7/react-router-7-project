import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </nav>

      {/* Main content */}
      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}
