import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getImages } from "../utils/API";

export const Dashboard = () => {
  const [imageFile, setImageFile] = useState(null);
  const { data: images, status } = useQuery({
    queryKey: ["getImages"],
    queryFn: getImages,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("event : ", e);
  };
  console.log("data, status : ", images, status);
  return (
    <section>
      <header>
        <h2>Mes images récentes</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='image'>Ajoutez une image</label>
          <input type='file' id='image' name='image' />
          <input type='submit' />
        </form>
      </header>
      <main>
        {images?.map((image) => (
          <img key={image.id} src={image.path} />
        ))}
      </main>
    </section>
  );
};
