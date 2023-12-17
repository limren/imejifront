import axios from "axios";

export const postOCR = async (image: File) => {
  const headers = {
    "Content-Type": "multipart/form-data",
    apikey: process.env.REACT_APP_API_KEY,
  };
  const formData = new FormData();
  const lang = localStorage.getItem("lang") === "fr-FR" ? "fre" : "eng";
  formData.append("language", lang);
  formData.append("file", image);
  formData.append("isOverlayRequired", "false");
  const response = await axios.post(
    "https://api.ocr.space/parse/image",
    formData,
    { headers }
  );
  return response.data.ParsedResults[0].ParsedText;
};
