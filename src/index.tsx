import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Images } from "./pages/Images";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/images",
    element: <App children={<Images />} />,
  },
  {
    path: "/profile",
    element: <App children={<Profile />} />,
  },
  {
    path: "/dashboard",
    element: <App children={<Dashboard />} />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
