import React from "react";
import { Navbar } from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
const queryClient = new QueryClient();
function App({ children }: { children?: JSX.Element }) {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='App'>
        <Navbar />
        <main>{children}</main>
      </section>
    </QueryClientProvider>
  );
}

export default App;
