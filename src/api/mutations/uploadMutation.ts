import axios from "axios";

// TODO: Replace any
export const uploadPicture = (file: any) => {
  return axios.post(`${process.env.GOFILE_SERVER as string}/uploadFile`, file);
};
