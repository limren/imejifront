import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteImage, getImage, putImage } from "../../utils/API/Image";
import "../../styles/Image.css";
import { Edit } from "../../assets/icons/Edit";
import { Delete } from "../../assets/icons/Delete";
import { Close } from "../../assets/icons/Close";
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
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingMod, setIsFetchingMod] = useState(false);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (data) {
      console.log("data : ", data);
      setTitle(data.image.title);
      setDescription(data.image.description);
      setTranslatedText(data.image.translatedText);
    }
  }, [data]);
  if (isLoading) {
    return <>Chargement...</>;
  }
  if (!data || error) {
    return <>Une erreur s'est produite</>;
  }
  const handleDelete = async () => {
    setIsFetching(true);
    const response = await deleteImage(data.image.id);
    setIsFetching(false);
    console.log("response : ", response);
    if (response.success) {
      navigate("/dashboard");
    }
  };
  const hasBeenModified = () => {
    return (
      title === data.image.title &&
      description === data.image.description &&
      translatedText === data.image.translatedText
    );
  };
  const handleConfirm = async () => {
    if (hasBeenModified()) return;

    setIsFetchingMod(true);
    const response = await putImage({
      id: data.image.id,
      title: title,
      description: description,
      translatedText: translatedText,
    });
    setIsFetchingMod(false);
    console.log("response : ", response);
  };
  return (
    <section className="image">
      <section className={isFetching || isFetchingMod ? `overlay` : `hidden`}>
        <p>{isFetchingMod ? "Modification" : "Suppression"} en cours...</p>
      </section>
      <header>
        <section>
          {isModifyMode ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                rows={15}
                cols={80}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </>
          ) : (
            <>
              <h2>{title}</h2>
              <p>{description}</p>
            </>
          )}
        </section>
        <section className="handlers">
          {isModifyMode ? (
            <section
              className="cancel"
              onClick={() => {
                setIsModifyMode(false);
              }}
            >
              <Close setOpen={() => setIsModifyMode(false)} />
            </section>
          ) : (
            <section className="modify" onClick={() => setIsModifyMode(true)}>
              <Edit />
            </section>
          )}

          <section onClick={handleDelete} className="delete">
            <Delete />
          </section>
        </section>
      </header>
      <main>
        <img
          src={`http://localhost:8000${data.image.path}`}
          alt={data.image.title}
        />
        <textarea
          rows={25}
          cols={150}
          disabled={!isModifyMode}
          value={translatedText}
          onChange={(e) => setTranslatedText(e.target.value)}
        />
      </main>
      <footer>
        <p>Création - {formattedCreatedDate}</p>
        <p>Dernière modification - {formattedUpdatedDate}</p>
      </footer>
      {isModifyMode && (
        <button disabled={hasBeenModified()} onClick={handleConfirm}>
          Confirmer les changements
        </button>
      )}
    </section>
  );
};
