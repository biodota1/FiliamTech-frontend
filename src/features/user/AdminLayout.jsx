import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <div className="w-[200px]">
        <AdminSidebar />
      </div>
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
}
