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
  const { register, handleSubmit } = useForm<createBookType>({
    resolver: zodResolver(createBookSchema),
  });

  const mutation = useMutation(mut.createNewBook, {
    onSuccess: () => {
      notify();
    },

    onError: () => {
      errorRegister();
    },
  });

  const onHandleSubmit: SubmitHandler<createBookType> = (data: IBook) => {
    mutation.mutate(data);
  };

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
              Meno knihy
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <textarea
              rows={2}
              cols={2}
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("description", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Popis knihy
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("authorId", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Id Autora
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("year", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rok vydania
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="string"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("status", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Stav knihy
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("pages", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Počet strán
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="string"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("publisher", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Vydavateľstvo
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="string"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("image", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Obrázok
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("categoryId", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Id kategórie
            </label>
          </div>
          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
            Pridaj novú knihu
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBookForm;
