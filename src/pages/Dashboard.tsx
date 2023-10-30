import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getImages } from "../utils/API/Image";
import { ImagePopUp } from "../components/ImagePopUp";

export const Dashboard = () => {
  const [createImgPopUp, setCreateImagePopUp] = useState(false);
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
      <p onClick={() => setCreateImagePopUp((open) => !open)}>
        Ouverture de la popup
      </p>
      <ImagePopUp open={createImgPopUp} />
      <div className={createImgPopUp ? `overlay` : `overlay hidden`}></div>
      <header>
        <h2>Mes images récentes</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='image'>Transformer mon image</label>
          <input type='file' id='image' name='image' />
          <input type='submit' />
        </form>
      </header>
      <main>
        {/* {images?.map((image) => (
          <img key={image.id} src={image.path} alt='' />
        ))} */}
      </main>
    </section>
  );
};
