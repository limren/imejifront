import { axiosServices } from "../axiosServices";

export const getImages = async () => {
  const response = await axiosServices.get("/getImages");
  console.log("response : ", response);
};
