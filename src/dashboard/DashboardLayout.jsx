import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar ثابت سمت چپ */}
      <Sidebar />

      {/* محتوای داخلی داشبورد */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
