import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { getUser } from "./utils/API";
import { User } from "./interfaces/User";
import { Footer } from "./components/Footer";
const queryClient = new QueryClient();
function App({
  children,
  createImgPopUp,
  isAuth,
  user,
  setUser,
  setToken,
  setIsAuth,
}: {
  user?: User;
  createImgPopUp: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  children?: JSX.Element;
  isAuth: boolean;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data);
    };
    if (isAuth) {
      fetchUser();
    }
  }, [isAuth, setUser]);
  return (
    <QueryClientProvider client={queryClient}>
      <section className={createImgPopUp ? `App overflow-hidden` : `App`}>
        <Navbar
          isAuth={isAuth}
          setToken={setToken}
          setIsAuth={setIsAuth}
          username={user?.pseudo}
        />
        <main>{children}</main>
        <Footer />
      </section>
    </QueryClientProvider>
  );
}

export default App;
