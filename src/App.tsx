import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { getUser } from "./utils/API";
import { User } from "./interfaces/User";
// import { getUser } from "./utils/API";
const queryClient = new QueryClient();
function App({ children }: { children?: JSX.Element }) {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("auth-token") ? true : false
  );
  const [token, setToken] = useState(localStorage.getItem("auth-token"));
  const [user, setUser] = useState<User>();
  useEffect(() => {
    // getUser();
    // setCookie();
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data);
    };
    fetchUser();
  }, []);
  console.log("user : ", user, token, isAuth);
  return (
    <QueryClientProvider client={queryClient}>
      <section className='App'>
        <Navbar isAuth={isAuth} username={user?.pseudo} />
        <main>{children}</main>
      </section>
    </QueryClientProvider>
  );
}

export default App;
