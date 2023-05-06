import Header from "../shared/Header";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/authorMutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  createAuthorType,
  createAuthorSchema,
} from "@/validators/author/authorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IAuthor } from "@/interfaces/IAuthor";

const notify = () => toast.success("Nový spisovateľ bol vytvorený");
const errorRegister = () => toast.error("Kategória nebola vytvorená");

const CreateAuthorForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<createAuthorType>({
    resolver: zodResolver(createAuthorSchema),
  });


  const mutation = useMutation(mut.createNewAuthor, {
    onSuccess: (data) => {
      notify();
    },

    onError: (data) => {
      errorRegister();
    },
  });

  const onHandleSubmit: SubmitHandler<createAuthorType> = (
    data: IAuthor | any
  ) => {
    mutation.mutate(data);
    reset();
  };


  /* 
   "externalId": 700262,
    "name": "Name1",
    "lastName": "FOFOFOFOF",
    "picture": null,
    "birthYear": 2001,
    "deathYear": null,
    "country": "Slovakia",
    "description": "ROROROROR",
    "litPeriod": "DOROROROROR"
  
  */


  return (
    <>
      <Header name="Pridanie nového autora" />
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
              Meno autora
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("lastName", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Priezivsko autora
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("picture", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fotka 
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

export default CreateAuthorForm;
