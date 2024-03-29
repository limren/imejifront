import { CreationImage, PutImage } from "../../interfaces/Image";
import { axiosServices } from "../axiosServices";
import { postOCR } from "./OCRApi";

export const getImage = async (id: string | undefined) => {
  const response = await axiosServices.get(`/getImage/${id}`);
  return response.data;
};

export const getImages = async (page = 0) => {
  const response = await axiosServices.get(`/getImages/${page}`);
  return response.data;
};

export const createImage = async (Image: CreationImage) => {
  const translatedText = await postOCR(Image.image);
  const formData = new FormData();
  formData.append("image", Image.image);
  formData.append("title", Image.title);
  formData.append("translatedText", translatedText);
  if (Image.description) {
    formData.append("description", Image.description);
  }

  const response = await axiosServices.post("/createImage", formData);
  return response;
};

export const putImage = async (Image: PutImage) => {
  const response = await axiosServices.put(`/putImage`, Image);
  return response.data;
};

export const deleteImage = async (id: string | undefined) => {
  const response = await axiosServices.delete(`/deleteImage/${id}`);
  return response.data;
};
