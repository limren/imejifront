import React, { useState } from "react";
import "../styles/ImagePopUp.css";
import { Close } from "../assets/icons/Close";
import { createImage } from "../utils/API/Image";
import { MessageError } from "../interfaces/utils/Message";
export const ImagePopUp = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log("boolean : ", open);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<MessageError>({
    hasError: false,
    message: "",
  });
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError({
        hasError: true,
        message: "Vous devez entrer un fichier !",
      });
    } else {
      createImage({
        title: title,
        description: description,
        image: file,
      });
    }
  };

  return (
    <section className={open ? `image-popup` : `image-popup hidden`}>
      <header>
        <h3>Création d'une image</h3>
        <Close setOpen={setOpen} />
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
