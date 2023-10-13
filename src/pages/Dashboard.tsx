import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getImages } from "../utils/API";

export const Dashboard = () => {
  const { data, status } = useQuery({
    queryKey: ["getImages"],
    queryFn: getImages,
  });
  console.log("data, status : ", data, status);
  return (
    <section>
      <header>
        <h2>Mes images récentes</h2>
      </header>
    </section>
  );
};
