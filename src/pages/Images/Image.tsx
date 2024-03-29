import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteImage, getImage, putImage } from "../../utils/API/Image";
import "../../styles/Image.css";
import { Edit } from "../../assets/icons/Edit";
import { Delete } from "../../assets/icons/Delete";
import { Close } from "../../assets/icons/Close";
import * as obj from "../../utils/Text";
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

  const lang = localStorage.getItem("lang");
  const formattedCreatedDate = new Date(
    data?.image.created_at
  ).toLocaleDateString(lang ? lang : "en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedUpdatedDate = new Date(
    data?.image.updated_at
  ).toLocaleDateString(lang ? lang : "en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const objTxt = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;
  useEffect(() => {
    if (data) {
      setTitle(data.image.title);
      setDescription(data.image.description);
      setTranslatedText(data.image.translatedText);
    }
  }, [data]);
  if (isLoading) {
    return <>{objTxt.loading}</>;
  }
  if (!data || error) {
    return <>{objTxt.errorhappened}</>;
  }
  const handleDelete = async () => {
    setIsFetching(true);
    const response = await deleteImage(data.image.id);
    setIsFetching(false);
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
    await putImage({
      id: data.image.id,
      title: title,
      description: description,
      translatedText: translatedText,
    });
    setIsFetchingMod(false);
    setIsModifyMode(false);
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
                rows={5}
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
              <Close
                setOpen={() => {
                  setTitle(data.image.title);
                  setDescription(data.image.description);
                  setTranslatedText(data.image.translatedText);
                  setIsModifyMode(false);
                }}
              />
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
        {isModifyMode && (
          <button disabled={hasBeenModified()} onClick={handleConfirm}>
            {objTxt.confirmchanges}
          </button>
        )}
        <textarea
          rows={18}
          cols={150}
          disabled={!isModifyMode}
          value={translatedText}
          onChange={(e) => setTranslatedText(e.target.value)}
        />
      </main>
      <footer>
        <p>
          {objTxt.creation} - {formattedCreatedDate}
        </p>
        <p>
          {objTxt.latestmodif} - {formattedUpdatedDate}
        </p>
      </footer>
    </section>
  );
};
