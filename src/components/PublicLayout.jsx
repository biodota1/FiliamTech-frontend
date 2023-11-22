import React from "react";
import PublicContent from "./PublicContent";
import Login from "../features/auth/Login";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 text-black">
      <PublicContent />
      <Login />
    </div>
  );
}
