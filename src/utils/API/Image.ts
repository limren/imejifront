import { CreationImage } from "../../interfaces/Image";
import { axiosServices } from "../axiosServices";
import { postOCR } from "./OCRApi";

export const getImages = async () => {
  const response = await axiosServices.get("/getImages");
  console.log("response : ", response);
  return response.data;
};

export const createImage = async (Image: CreationImage) => {
  const translatedText = await postOCR(Image.image);
  console.log("res from api : ", translatedText);
  const formData = new FormData();
  formData.append("image", Image.image);
  formData.append("title", Image.title);
  formData.append("translatedText", translatedText);
  if (Image.description) {
    formData.append("description", Image.description);
  }

  const response = await axiosServices.post("/createImage", formData);
  console.log("response : ", response);
};
