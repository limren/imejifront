import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getImages } from "../utils/API/Image";
import { ImagePopUp } from "../components/ImagePopUp";
import { CardImage } from "../components/Cards/CardImage";
import { Image } from "../interfaces/Image";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { Create } from "../assets/icons/Create";
import * as obj from "../utils/Text";
export const Dashboard = ({
  createImgPopUp,
  setCreateImagePopUp,
}: {
  createImgPopUp: boolean;
  setCreateImagePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [nbPage, setNbPage] = useState(1);
  const { data } = useQuery(["getImages", nbPage], () => getImages(nbPage));
  const [isLoading, setIsLoading] = useState(false);
  const objTxt = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;
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
        <h2>{objTxt.gallery}</h2>
        <section onClick={() => setCreateImagePopUp((open) => !open)}>
          <Create />
          <p>{objTxt.addimage}</p>
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
          { length: data?.total / 10 + 1 },
          (_, index) => index + 1
        ).map((page) => {
          return (
            <p
              key={page}
              onClick={() => setNbPage(page)}
              style={{
                color: page === nbPage ? "red" : "",
                cursor: "pointer",
              }}
            >
              {page}
            </p>
          );
        })}
      </footer>
    </section>
  );
};
