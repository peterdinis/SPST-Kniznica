import Header from "../shared/Header";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/bookMutation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BaseButton from "../shared/BaseButton";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  description: string;
  author: string;
  year: number;
  available: boolean;
  pages: number;
  publisher: string;
  image: string;
  status: string;
  categoryId: number;
};

const notify = () => toast.success("Kniha bola vytvorená");
const errorRegister = () => toast.error("Kniha nebola vytvorená");

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  author: yup.string().required(),
  year: yup.number().required(),
  available: yup.boolean().required(),
  pages: yup.number().required(),
  publisher: yup.string().required(),
  image: yup.string().required(),
  status: yup.string().required(),
  categoryId: yup.number().required()

})

const CreateBookForm: React.FC = () => {
  return (
    <>
      <Header name="Vytvorenie novej knihy" />
      prrprp
    </>
  );
};

export default CreateBookForm;
