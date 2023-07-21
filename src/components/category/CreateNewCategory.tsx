import React, { useState } from "react";
import Header from "../shared/Header";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/categoryMutation";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  createCategoryType,
  createCategorySchema,
} from "@/validators/category/categorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { ICategory } from "@/interfaces/ICategory";
import {
  allFieldsErrors,
  createNotify,
} from "../shared/toasts/categoryToast";

const CreateNewCategory: React.FC = () => {
  const router = useRouter();

  const { handleSubmit, register, reset } = useForm<createCategoryType>({
    resolver: zodResolver(createCategorySchema),
  });

  const mutation = useMutation(mut.createNewCategory, {
    onSuccess: (data) => {
      createNotify();
    }
  });

  const onHandleSubmit: SubmitHandler<createCategoryType> = (
    data: ICategory
  ) => {
    if (!data.name || !data.description) {
      allFieldsErrors();
      return;
    }

    mutation.mutate(data);
    reset();
  };

  return (
    <>
      <Header name="Vytvorenie novej kategórie" />
      <div className="max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("name", { required: true })}
            />
            <label
              htmlFor="name"
              className={`absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ${
                register.name ? "up" : ""
              }`}
            >
              Meno kategórie
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("description", { required: true })}
            />
            <label
              htmlFor="description"
              className={`absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]`}
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