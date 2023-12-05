import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Image } from "./pages/Images/Image";

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
  {
    path: "/image/:id",
    element: <App children={<Image />} />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
