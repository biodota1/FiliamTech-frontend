import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import React from "react";
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./features/user/AdminLayout";
import AdminTimeSheet from "./features/user/AdminTimeSheet";
import AdminDashboard from "./features/user/AdminDashboard";
import AdminCalendar from "./features/user/AdminCalendar";
import AdminNotes from "./features/user/AdminNotes";
import AdminUsers from "./features/user/AdminUsers";
React;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, Component: () => <PublicLayout /> },
      {
        path: "admin/",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            Component: () => <AdminDashboard />,
          },
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "users", element: <AdminUsers /> },
          { path: "notes", element: <AdminNotes /> },
          { path: "calendar", element: <AdminCalendar /> },
          { path: "timesheet", element: <AdminTimeSheet /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
