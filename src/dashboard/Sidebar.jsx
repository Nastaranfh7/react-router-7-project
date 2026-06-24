import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "20px" }}>
      <h3>Menu</h3>
      <NavLink to="/dashboard">Home</NavLink><br/>
      <NavLink to="/dashboard/orders">Orders</NavLink><br/>
      <NavLink to="/dashboard/products">Products</NavLink><br/>
      <NavLink to="/dashboard/settings">Settings</NavLink>
    </div>
  );
}
