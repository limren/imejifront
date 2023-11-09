import { CreationImage } from "../../interfaces/Image";
import { axiosServices } from "../axiosServices";

export const getImages = async () => {
  const response = await axiosServices.get("/getImages");
  console.log("response : ", response);
  return response.data;
};


export const createImage = async(Image: CreationImage) => 
{
  const formData = new FormData();
  formData.append("image", Image.image);
  formData.append("title", Image.title);
  if(Image.description)
  {
    formData.append("description", Image.description);
  }
  
  const response = await axiosServices.post("/createImage", formData);
  console.log("response : ", response);
}