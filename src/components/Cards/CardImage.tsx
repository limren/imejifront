import React from "react";
import { Image } from "../../interfaces/Image";
import "../../styles/CardImage.css";
export const CardImage = ({ image }: { image: Image }) => {
  const lang = localStorage.getItem("lang");
  const formattedDate = new Date(image.created_at).toLocaleDateString(
    lang ? lang : "en-EN",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <div className="card-image">
      <header>
        <h3>{image.title}</h3>
        <p>
          {image.description?.length! > 150
            ? image.description?.substring(0, 150) + "..."
            : image.description}
        </p>
      </header>
      <main>
        <img src={`http://localhost:8000${image.path}`} alt={image.title} />
      </main>
      <footer>
        <p>{formattedDate}</p>
      </footer>
    </div>
  );
};
