"use client"

import Header from "../shared/Header";
import * as mut from "../../api/mutations/bookMutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBook } from "@/interfaces/IBook";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBookType, createBookSchema } from "@/validators/book/bookSchema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { createNotify, createErrorRegister, allFieldsBooksError } from "../shared/toasts/bookToasts";
import { Input, Textarea } from "@chakra-ui/react";

const CreateBookForm: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<createBookType>({
    resolver: zodResolver(createBookSchema),
  });

  const mutation = useMutation(mut.createNewBook, {
    onSuccess: () => {
      createNotify();
    },

    onError: () => {
      createErrorRegister();
      router.push("/books/failed");
    },
  });

  const onHandleSubmit: SubmitHandler<createBookType> = (data: IBook) => {
    if(!data.name || !data.description || !data.authorName || !data.year || !data.pages || !data.image || !data.status || !data.categoryName) {
      allFieldsBooksError();
    }
    mutation.mutate(data);
  };

  return (
    <>
      <Header name="Vytvorenie novej knihy" />
      <div className="max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="relative z-0 mb-6 group">
            <Input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("name", {
                required: true,
              })}
              placeholder="Meno Knihy"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Textarea
              rows={2}
              cols={2}
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("description", {
                required: true,
              })}
              placeholder="Popis knihy"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("authorName", {
                required: true,
              })}
              placeholder="Celé meno autorka/ky"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("year", {
                valueAsNumber: true,
                required: true,
              })}
              placeholder="Rok vydania"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="string"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("status", {
                required: true,
              })}
              placeholder="Status knihy"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("pages", {
                required: true,
                valueAsNumber: true
              })}
              placeholder="Počet strán"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("quantity", {
                required: true,
                valueAsNumber: true
              })}
              placeholder="Počet kusov"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="string"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("publisher", {
                required: true,
              })}
              placeholder="Vydavateľstvo"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="string"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("image", {
                required: true,
              })}
              placeholder="Obrázok"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("categoryName", {
                required: true,
              })}
              placeholder="Meno kategórie"
            />
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
