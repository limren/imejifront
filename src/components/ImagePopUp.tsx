import React, { useState } from "react";
import "../styles/ImagePopUp.css";
import { Close } from "../assets/icons/Close";
import { createImage, getImages } from "../utils/API/Image";
import { MessageError } from "../interfaces/utils/Message";
import { useQuery } from "@tanstack/react-query";
export const ImagePopUp = ({
  open,
  setOpen,
  nbPage,
  isLoading,
  setIsLoading,
}: {
  open: boolean;
  isLoading: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  nbPage: number;
}) => {
  console.log("boolean : ", open);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<MessageError>({
    hasError: false,
    message: "",
  });

  const { refetch } = useQuery(["getImages", nbPage], () => getImages(nbPage));
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("event");
    e.preventDefault();
    if (!file) {
      setError({
        hasError: true,
        message: "Vous devez entrer un fichier !",
      });
    } else {
      setIsLoading(true);
      await createImage({
        title: title,
        description: description,
        image: file,
      });
      setIsLoading(false);
      refetch();
      setOpen(false);
    }
  };
  return (
    <section className={open ? `image-popup` : `image-popup hidden`}>
      <header>
        <h3>Création d'une image</h3>
        <section>
          <Close setOpen={() => setOpen(false)} />
        </section>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Titre de votre image"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="description"
            name="description"
            placeholder="Description de votre image"
            onChange={(e) => setDescription(e.target.value)}
          />
          {error.hasError && <p>{error.message}</p>}
          <div>
            <label htmlFor="file">Choix de l'image</label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setError({
                    hasError: false,
                    message: "",
                  });
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
          <button type="submit">Envoyer le formulaire</button>
        </form>
      </main>
    </section>
  );
};
