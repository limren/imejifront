import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getImages } from "../utils/API/Image";
import { ImagePopUp } from "../components/ImagePopUp";
import { CardImage } from "../components/Cards/CardImage";
import { Image } from "../interfaces/Image";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { Create } from "../assets/icons/Create";
export const Dashboard = ({
  createImgPopUp,
  setCreateImagePopUp,
}: {
  createImgPopUp: boolean;
  setCreateImagePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [nbPage, setNbPage] = useState(1);
  const { data, status } = useQuery(["getImages", nbPage], () =>
    getImages(nbPage)
  );
  const [isLoading, setIsLoading] = useState(false);

  console.log("data, status : ", data?.images, status);

  return (
    <section className="dashboard">
      <section className={isLoading ? `overlay` : `hidden`}>
        <p>Création de l'image en cours...</p>
      </section>
      <ImagePopUp
        nbPage={nbPage}
        open={createImgPopUp}
        setOpen={setCreateImagePopUp}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className={createImgPopUp ? `overlay` : `overlay hidden`}></div>
      <header>
        <h2>Mes images</h2>
        <section onClick={() => setCreateImagePopUp((open) => !open)}>
          <Create />
          <p>Ajouter une image</p>
        </section>
      </header>
      <main>
        {data?.images?.map((image: Image) => (
          <Link to={`/image/${image.id}`} key={image.id}>
            <CardImage image={image} />
          </Link>
        ))}
      </main>
      <footer>
        {Array.from(
          { length: data?.total / 20 + 1 },
          (_, index) => index + 1
        ).map((page) => {
          return (
            <span
              key={page}
              onClick={() => setNbPage(page)}
              style={{
                color: page === nbPage ? "red" : "",
                cursor: "pointer",
              }}
            >
              {page}
            </span>
          );
        })}
      </footer>
    </section>
  );
};
