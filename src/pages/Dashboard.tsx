import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getImages } from "../utils/API/Image";
import { ImagePopUp } from "../components/ImagePopUp";
import { CardImage } from "../components/Cards/CardImage";
import { Image } from "../interfaces/Image";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  const [nbPage, setNbPage] = useState(1);
  const [createImgPopUp, setCreateImagePopUp] = useState(false);
  const { data, status } = useQuery(["getImages", nbPage], () =>
    getImages(nbPage)
  );
  console.log("data, status : ", data?.images, status);

  return (
    <section className="dashboard">
      <ImagePopUp
        nbPage={nbPage}
        open={createImgPopUp}
        setOpen={setCreateImagePopUp}
      />
      <div className={createImgPopUp ? `overlay` : `overlay hidden`}></div>
      <header>
        <h2>Mes images récentes</h2>
        <p onClick={() => setCreateImagePopUp((open) => !open)}>
          Ouverture de la popup
        </p>
      </header>
      <main>
        {data?.images?.map((image: Image) => (
          <Link to={`/image/${image.id}`}>
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
