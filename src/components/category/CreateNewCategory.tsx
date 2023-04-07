import Header from "../shared/Header";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/categoryMutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createCategoryType, createCategorySchema } from "@/validators/category/createCategorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICategory } from "@/interfaces/ICategory";


const notify = () => toast.success("Kategória bola vytvorená");
const errorRegister = () => toast.error("Kategória nebola vytvorená");



const CreateNewCategory: React.FC = () => {
  const { register, handleSubmit } = useForm<createCategoryType>({
    resolver: zodResolver(createCategorySchema)
  });

  /* TODO: Later update this logic */
  const mutation = useMutation(mut.createNewCategory, {
    onSuccess: (data) => {
      notify()
    },

    onError: (data) => {
      errorRegister();
    }
  });

  const onHandleSubmit: SubmitHandler<createCategoryType> = (data: ICategory) => {
    mutation.mutate(data);
  }

  return (
    <>
      <Header name="Vytvorenie novej kategórie" />
      <div className="max-w-2xl mx-auto mt-10">
        <form
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("name", {
                required: true
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
                required: true
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

export default CreateNewCategory;
