import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Image } from "./pages/Images/Image";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Homepage } from "./pages/Homepage";
import { User } from "./interfaces/User";
import "./styles/Index.css";
const AppContainer = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User>();
  const [createImgPopUp, setCreateImagePopUp] = useState(false);
  useEffect(() => {
    setIsAuth(localStorage.getItem("auth-token") ? true : false);
    setToken(localStorage.getItem("auth-token"));
    localStorage.setItem("lang", navigator.language);
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          user={user}
          setUser={setUser}
          setIsAuth={setIsAuth}
          setToken={setToken}
          createImgPopUp={createImgPopUp}
          isAuth={isAuth}
          children={<Homepage />}
        />
      ),
    },
    {
      path: "/profile",
      element: (
        <App
          user={user}
          setUser={setUser}
          setIsAuth={setIsAuth}
          setToken={setToken}
          isAuth={isAuth}
          createImgPopUp={createImgPopUp}
          children={
            <ProtectedRoute
              isAuth={isAuth}
              children={
                <Profile
                  user={user}
                  setIsAuth={setIsAuth}
                  setToken={setToken}
                />
              }
            />
          }
        />
      ),
    },
    {
      path: "/dashboard",
      element: (
        <App
          user={user}
          setUser={setUser}
          setIsAuth={setIsAuth}
          setToken={setToken}
          isAuth={isAuth}
          createImgPopUp={createImgPopUp}
          children={
            <ProtectedRoute
              isAuth={isAuth}
              children={
                <Dashboard
                  createImgPopUp={createImgPopUp}
                  setCreateImagePopUp={setCreateImagePopUp}
                />
              }
            />
          }
        />
      ),
    },
    {
      path: "/login",
      element: (
        <App
          user={user}
          setUser={setUser}
          setIsAuth={setIsAuth}
          setToken={setToken}
          createImgPopUp={createImgPopUp}
          isAuth={isAuth}
          children={
            <Login isAuth={isAuth} setIsAuth={setIsAuth} setToken={setToken} />
          }
        />
      ),
    },
    {
      path: "/register",
      element: (
        <App
          user={user}
          setUser={setUser}
          setIsAuth={setIsAuth}
          setToken={setToken}
          createImgPopUp={createImgPopUp}
          isAuth={isAuth}
          children={<Register />}
        />
      ),
    },
    {
      path: "/image/:id",
      element: (
        <App
          user={user}
          setUser={setUser}
          setIsAuth={setIsAuth}
          setToken={setToken}
          isAuth={isAuth}
          createImgPopUp={createImgPopUp}
          children={<Image />}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContainer />
);
