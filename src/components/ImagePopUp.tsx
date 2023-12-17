import React, { useState } from "react";
import "../styles/ImagePopUp.css";
import { Close } from "../assets/icons/Close";
import { createImage, getImages } from "../utils/API/Image";
import { MessageError } from "../interfaces/utils/Message";
import { useQuery } from "@tanstack/react-query";
import * as obj from "../utils/Text";
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
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<MessageError>({
    hasError: false,
    message: "",
  });
  const [titleError, setTitleError] = useState({
    boolean: false,
    message: "",
  });
  const [descriptionError, setDescriptionError] = useState({
    boolean: false,
    message: "",
  });
  const lang = localStorage.getItem("lang") === "fr-FR" ? "fr" : "en";
  const { refetch } = useQuery(["getImages", nbPage], () => getImages(nbPage));
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleError.boolean || descriptionError.boolean) return;
    if (!file) {
      setError({
        hasError: true,
        message:
          lang === "fr"
            ? "Vous devez entrer un fichier !"
            : "You must enter a file !",
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

  const objText = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;
  return (
    <section className={open ? `image-popup` : `image-popup hidden`}>
      <section className={isLoading ? `overlay` : `hidden`}>
        <p>{objText.addtxt}</p>
      </section>
      <header>
        <h3>{objText.createimg}</h3>
        <section>
          <Close setOpen={() => setOpen(false)} />
        </section>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">{objText.titleimg} :</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder={objText.titleph}
            onChange={(e) => {
              if (e.target.value.length < 3) {
                setTitleError({
                  boolean: true,
                  message:
                    lang === "fr" ? "Titre trop court" : "Title too short",
                });
              } else if (titleError.boolean && e.target.value.length >= 3) {
                setTitleError({
                  boolean: false,
                  message: "",
                });
              }
              setTitle(e.target.value);
            }}
          />
          {titleError.boolean && <p className="error">{titleError.message}</p>}
          <label htmlFor="description">{objText.descimg} :</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={(e) => {
              if (e.target.value.length < 3) {
                setDescriptionError({
                  boolean: true,
                  message:
                    lang === "fr"
                      ? "Description trop courte"
                      : "Description too short",
                });
              } else if (
                descriptionError.boolean &&
                e.target.value.length >= 3
              ) {
                setDescriptionError({
                  boolean: false,
                  message: "",
                });
              }
              setDescription(e.target.value);
            }}
          />
          {descriptionError.boolean && (
            <p className="error">{descriptionError.message}</p>
          )}
          <section>
            <label htmlFor="file">{objText.choiceimg}</label>
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
            {error.hasError && <p className="error">{error.message}</p>}
          </section>
          <button type="submit">{objText.createretrans}</button>
        </form>
      </main>
    </section>
  );
};
