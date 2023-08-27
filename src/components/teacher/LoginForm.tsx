import Link from "next/link";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/teacherMutations";
import { ILogin, ILoginTeacherInfo } from "@/interfaces/ITeacher";
import { useRouter } from "next/router";
import { notify, errorRegister } from "../shared/toasts/loginToasts";
import { IErrorMessage } from "@/interfaces/IError";
import {
  applicationErrorToast,
  emailAlreadyExistsToast,
} from "../shared/toasts/applicationToasts";
import { Header } from "../shared";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const mutation = useMutation(mut.login, {
    onSuccess: (data: ILoginTeacherInfo) => {
      Cookies.set("teacherData", JSON.stringify(data));
      Cookies.set("teacherPersonalInfo", JSON.stringify(data.data.user));
      Cookies.set("teacherAccessDta", JSON.stringify(data.data.token));
      Cookies.remove("studentData");
      Cookies.remove("adminData");
      notify();
      window.location.replace("/teacher/profile");
    },

    onError: (error: IErrorMessage) => {
      if (error.response?.status === 409) {
        applicationErrorToast();
      } else if (error.response?.data?.message === "Email already exists") {
        emailAlreadyExistsToast();
      } else {
        errorRegister();
      }
      router.push("/failed");
      errorRegister();
      return;
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<ILogin>();

  const onHandleSubmit = (data: ILogin) => {
    try {
      Cookies.set("teacherData", JSON.stringify(data));
      mutation.mutate(data);
    } catch (err: any) {
      if (err.response?.data?.message === "Email already exists") {
        emailAlreadyExistsToast();
      } else {
        errorRegister();
      }
    }
  };

  return (
    <>
      <Header name="Prihlásenie učiteľ" />
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
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
                    message: "Emailová adresa nie je správna",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />

              {errors.email && errors.email.type === "required" && (
                <p className="text-red-800">Email je povinný</p>
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
                  href="/teacher/register"
                >
                  Registrácia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
