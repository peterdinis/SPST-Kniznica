import Header from "../shared/Header";
import { toast } from "react-toastify";
import * as mut from "../../api/mutations/bookMutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBook } from "@/interfaces/IBook";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBookType, createBookSchema } from "@/validators/book/bookSchema";
import { useMutation } from "@tanstack/react-query";
import useTeacher from "@/hooks/useTeacher";
import useAdmin from "@/hooks/useAdmin";

const notify = () => toast.success("Kniha bola vytvorená");
const errorRegister = () => toast.error("Kniha nebola vytvorená");


const CreateBookForm: React.FC = () => {
  const {teacher} = useTeacher();
  const {admin} = useAdmin();
  const {register, handleSubmit} = useForm<createBookType>({
    resolver: zodResolver(createBookSchema)
  });

  const mutation = useMutation(mut.createNewBook, {
    onSuccess: () => {
      notify();
    },

    onError: () => {
      errorRegister();
    }
  });

  // TODO: Remove any
  const onHandleSubmit: SubmitHandler<createBookType> = (data: IBook | any) => {
    mutation.mutate(data);
  }


  return (
    <>
      <Header name="Vytvorenie novej knihy" />
      prrprp
    </>
  );
};

export default CreateBookForm;
