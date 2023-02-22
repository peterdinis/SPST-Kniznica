import axios from "axios";

export const uploadPicture = (file: Blob | string) => {
  return axios.post(`${process.env.GOFILE_SERVER as string}/uploadFile`, file);
};
