import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Images } from "./pages/Images";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<Dashboard />} />,
  },
  {
    path: "/profile",
    element: <App children={<Profile />} />,
  },
  {
    path: "/dashboard",
    element: <App children={<Dashboard />} />,
  },
  {
    path: "/login",
    element: <App children={<Login />} />,
  },
  {
    path: "/register",
    element: <App children={<Register />} />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
