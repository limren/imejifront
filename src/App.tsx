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
  isAuth,
  token,
  user,
  setUser,
  setToken,
  setIsAuth,
}: {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  children?: JSX.Element;
  isAuth: boolean;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    // getUser();
    // setCookie();
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data);
    };
    fetchUser();
  }, []);
  console.log("navigator lang : ", navigator.language);
  return (
    <QueryClientProvider client={queryClient}>
      <section className="App">
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
