import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import React from "react";
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./features/user/AdminLayout";
import AdminTimeSheet from "./features/user/AdminTimeSheet";
React;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, Component: () => <PublicLayout /> },
      {
        path: "users/",
        element: <AdminLayout />,
        children: [
          { index: true, Component: () => <AdminDashboard /> },
          { path: "/timesheet", element: <AdminTimeSheet /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
