import Header from "../shared/Header";
import { toast } from "react-toastify";
import * as mut from "../../api/mutations/bookMutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBook } from "@/interfaces/IBook";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBookType, createBookSchema } from "@/validators/book/bookSchema";
import { useMutation } from "@tanstack/react-query";

const notify = () => toast.success("Kniha bola vytvorená");
const errorRegister = () => toast.error("Kniha nebola vytvorená");


const CreateBookForm: React.FC = () => {
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
       <div className="max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("name", {
                required: true,
              })}
            />
            <label
              htmlFor="name"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Meno kategórie
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("description", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Popis kategórie
            </label>
          </div>
          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
            Vytvor novú kategóriu
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBookForm;
