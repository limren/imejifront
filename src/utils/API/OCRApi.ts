import axios from "axios";

export const postOCR = async (image: File) => {
  console.log("posting");
  const headers = {
    "Content-Type": "multipart/form-data",
    apikey: process.env.REACT_APP_API_KEY,
  };
  const formData = new FormData();
  formData.append("language", "fre");
  formData.append("file", image);
  formData.append("isOverlayRequired", "false");
  const response = await axios.post(
    "https://api.ocr.space/parse/image",
    formData,
    { headers }
  );
  console.log("response : ", response);
  return response.data.ParsedResults[0].ParsedText;
};
