import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/authorMutations";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  createAuthorType,
  createAuthorSchema,
} from "@/validators/author/authorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IAuthor } from "@/interfaces/IAuthor";
import { useRouter } from "next/router";
import { notify, errorRegister, allAuthorFieldsError } from "../shared/toasts/authorToasts";
import { Header } from "../shared";
import CustomTooltip from "../shared/tooltip/CustomTooltip";
import { Checkbox, Input, Textarea  } from "@chakra-ui/react";

const CreateAuthorForm: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<createAuthorType>({
    resolver: zodResolver(createAuthorSchema),
  });


  const mutation = useMutation(mut.createNewAuthor, {
    onSuccess: () => {
      notify();
    },
    onError: () => {
      errorRegister();
      router.push("/authors/failed");
    },
  });

  const onHandleSubmit: SubmitHandler<createAuthorType> = (
    data: IAuthor
  ) => {
    console.log(data);
    if (!data.name || !data.lastName || !data.image || !data.isAlive ||  !data.birthYear || !data.country || !data.description || !data.litPeriod) {
      allAuthorFieldsError();
    }
    mutation.mutate(data);
    reset();
  };

  return (
    <>
      <Header name="Pridanie nového autora" />
      <div className="max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="relative z-0 mb-6 group">
            <Input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("name", {
                required: true,
              })}
              placeholder="Meno Autora/ky"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("lastName", {
                required: true,
              })}
              placeholder="Priezvisko autora/ky"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("image", {
                required: true,
              })}
              placeholder="Autorova fotka"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="number"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("birthYear", {
                required: true,
              })}
              placeholder="Rok narodenia"
            />
          </div>
          <CustomTooltip label={"Ak je autor/ka nažive nemusí byť daný element vyplnený"} placement={"start-start"}>
            <div className="relative z-0 mb-6 group">
              <Checkbox
                type="checkbox"
                placeholder="Nemusí byť vyplnené ak autor/autorka je nažive"
                className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                {...register("isAlive", {
                  required: true,

                })}
              />
              <label
                htmlFor="description"
                className="ml-2 text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Je spisovtateľ/ka nažive
              </label>
            </div>
          </CustomTooltip>
          <div className="relative z-0 mb-6 group">
            <Textarea
              rows={3}
              cols={3}
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("description", {
                required: true,

              })}
              placeholder="Info o spisovateľovi/ke"
            />
          </div>
          <div className="relative z-0 mb-6 group">
            <Input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("litPeriod", {
                required: true,
              })}
              placeholder="Literárne obdobie"
            />
          </div>
          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
            Pridať nového autora
          </button>
        </form>
      </div>
    </>
  );
};
export default CreateAuthorForm;