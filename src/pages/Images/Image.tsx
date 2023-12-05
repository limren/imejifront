import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImage } from "../../utils/API/Image";
import "../../styles/Image.css";
export const Image = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  let { id } = useParams();
  const { isLoading, data, error } = useQuery(
    ["getImage", id],
    () => getImage(id),
    {
      refetchOnWindowFocus: false,
      staleTime: 5000,
    }
  );
  useEffect(() => {});
  const formattedCreatedDate = new Date(
    data?.image.created_at
  ).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedUpdatedDate = new Date(
    data?.image.updated_at
  ).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (isLoading) {
    return <>Chargement...</>;
  }
  if (!data || error) {
    return <>Une erreur s'est produite</>;
  }
  return (
    <section className="image">
      <header>
        <h2>{data.image.title}</h2>
        <p>{data.image.description}</p>
      </header>
      <main>
        <img
          src={`http://localhost:8000${data.image.path}`}
          alt={data.image.title}
        />
        <p>{data.image.translatedText}</p>
      </main>
      <footer>
        <p>Création - {formattedCreatedDate}</p>
        <p>Dernière modification - {formattedUpdatedDate}</p>
      </footer>
    </section>
  );
};
