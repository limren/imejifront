import React, { useState } from "react";
import { Image } from "../../interfaces/Image";

export const ModifyImage = ({ image }: { image: Image }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  return <div>ModifyImage</div>;
};
