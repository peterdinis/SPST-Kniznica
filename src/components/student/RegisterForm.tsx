import Header from "../shared/Header";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  INewRegisteredStudent,
  IRegisterStudent,
} from "@/api/interfaces/IUser";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../api/mutations/studentMutation";
import Link from "next/link";
import { useEffect } from "react";

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Registrácia bola úspešná");
  const errorRegister = () => toast.error("Registrácia nebola úspešná");

  useEffect(() => {
    localStorage.clear();
  }, []);

  const mutation = useMutation(api.registerStudent, {
    onSuccess: (data: INewRegisteredStudent) => {
      localStorage.setItem("studentRefreshToken", data.data.refreshToken);
      localStorage.setItem("studentAccessToken", data.data.accessToken);
      localStorage.setItem("studentEmail", data.data.newStudent.email);
      localStorage.setItem("studentId", data.data.newStudent.id);
      localStorage.setItem("studentId", data.data.newStudent.id);
      localStorage.setItem("studentRole", data.data.newStudent.role);
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
  } = useForm<IRegisterStudent>();

  const onHandleSubmit = (data: IRegisterStudent) => {
    try {
      mutation.mutate(data);
      router.push("/student/login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Header name="Registrácia žiak" />
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

              <p className="text-red-800">
                {errors.name && errors.name.message}
              </p>

              {errors.name && errors.name.type === "required" && (
                <p className="errorMsg">Meno je povinné</p>
              )}

              {errors.name && errors.name.type === "minLength" && (
                <p className="errorMsg">Meno musí mať viac ako jeden znak</p>
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

            <p className="text-red-800">
              {errors.lastName && errors.lastName.message}
            </p>

            {errors.lastName && errors.lastName.type === "required" && (
              <p className="errorMsg">Meno je povinné</p>
            )}

            {errors.lastName && errors.lastName.type === "minLength" && (
              <p className="errorMsg">Meno musí mať viac ako jeden znak</p>
            )}
          </div>

          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Email
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Email"
              type="text"
              autoFocus
              placeholder="Email"
              {...register("email", {
                required: "Email je povinný",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Emailová adresa nie je valídna",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />

            <p className="text-red-800">
              {errors.email && errors.email.message}
            </p>

            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Meno je povinné</p>
            )}
          </div>

          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Heslo
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Heslo"
              type="password"
              autoFocus
              autoComplete="current-password"
              placeholder="********************************************"
              {...register("password", {
                required: "Zadajte heslo",
                minLength: {
                  value: 8,
                  message: "Heslo musí mať viac znakov ako je 8",
                },
                maxLength: {
                  value: 20,
                  message: "Heslo môže mať najviac 20 znakov",
                },
              })}
              onKeyUp={() => {
                trigger("password");
              }}
            />

            <p className="text-red-800">
              {errors.password && errors.password.message}
            </p>
          </div>

          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Rola
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Role"
              type="string"
              autoFocus
              placeholder="STUDENT"
              {...register("role", {
                required: "Rola je povinná",
              })}
              onKeyUp={() => {
                trigger("role");
              }}
            />

            <p className="text-red-800">{errors.role && errors.role.message}</p>
            {errors.role && errors.role.type === "required" && (
            <p className="text-red-800">Rola je povinná.</p>
          )}
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Trieda
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Role"
              type="string"
              autoFocus
              placeholder="1.A"
              {...register("classRoom", {
                required: "Trieda je povinná",
              })}
              onKeyUp={() => {
                trigger("classRoom");
              }}
            />

            <p className="text-red-800">
              {errors.classRoom && errors.classRoom.message}
            </p>
            {errors.classRoom && errors.classRoom.type === "required" && (
            <p className="text-red-800">Trieda je povinná.</p>
          )}
          </div>
          <div>
            <button
              className="mt-4 bg-red-700 rounded-lg p-2 text-white"
              type="submit"
            >
              Registrácia
            </button>
            <div>
              <Link
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/login"
              >
                Prihlásenie
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
