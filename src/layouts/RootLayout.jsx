import { Outlet, Link } from "react-router-dom";


export default function RootLayout() {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
