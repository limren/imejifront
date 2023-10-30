import React from "react";
import "../styles/ImagePopUp.css";
import { Close } from "../assets/icons/Close";
export const ImagePopUp = ({ open }: { open: boolean }) => {
  console.log("boolean : ", open);
  return (
    <section className={open ? `image-popup` : `image-popup hidden`}>
      <header>
        <h3>Création d'une image</h3>
        <Close />
      </header>
    </section>
  );
};
