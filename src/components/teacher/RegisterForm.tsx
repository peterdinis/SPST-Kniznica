import Link from "next/link";
import Header from "../shared/Header";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../api/mutations/teacherMutations";
import {
  INewRegisteredTeacher,
  IRegisterTeacher,
} from "@/api/interfaces/ITeacher";

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Registrácia bola úspešná");
  const errorRegister = () => toast.error("Registrácia nebola úspešná");

  const mutation = useMutation(api.registerTeacher, {
    onSuccess: (data: INewRegisteredTeacher) => {
      Cookies.set("currentTeacher", JSON.stringify(data.data.newTeacher));
      Cookies.set("teacherAccessToken", JSON.stringify(data.data.accessToken));
      notify();
    },

    onError: (data) => {
      alert(data);
      errorRegister();
      router.push("/student/register");
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<IRegisterTeacher>();

  const onHandleSubmit = (data: IRegisterTeacher) => {
    try {
      mutation.mutate(data);
      router.push("/teacher/login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Header name="Registrácia učiteľ" />
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Meno
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Meno"
                type="text"
                autoFocus
                placeholder="Meno"
                {...register("name", {
                  required: true,
                  minLength: 1,
                  min: 1,
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />

              {errors.name && errors.name.type === "required" && (
                <p className="text-red-800">Meno je povinné</p>
              )}

              {errors.name && errors.name.type === "minLength" && (
                <p className="text-red-800">
                  Meno musí mať viac ako jeden znak
                </p>
              )}
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Priezivsko
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Priezivsko"
              type="text"
              autoFocus
              placeholder="Priezivsko"
              {...register("lastName", {
                required: true,
                minLength: 1,
                min: 1,
              })}
              onKeyUp={() => {
                trigger("lastName");
              }}
            />

            {errors.lastName && errors.lastName.type === "required" && (
              <p className="text-red-800">Priezivsko je povinné</p>
            )}

            {errors.lastName && errors.lastName.type === "minLength" && (
              <p className="text-red-800">
                Priezvisko musí mať viac ako jeden znak
              </p>
            )}
          </div>
          <div>
            <button
              className="mt-4 bg-red-700 rounded-lg p-2 text-white"
              type="submit"
            >
              Prihlásenie
            </button>
            <div>
              <Link
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/register"
              >
                Registrácia tu
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
