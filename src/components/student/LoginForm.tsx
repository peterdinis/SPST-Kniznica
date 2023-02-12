import Header from "../shared/Header";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  ILoginStudent,
  INewRegisteredStudent,
} from "@/api/interfaces/IUser";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../api/mutations/studentMutation";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Prihlásenie bolo úspešné");
  const errorRegister = () => toast.error("Prihlásenie nebolo úspešné");

  const mutation = useMutation(api.loginStudent, {
    onSuccess: (data: INewRegisteredStudent) => {
      localStorage.clear();
      localStorage.setItem("studentRefreshToken", data.data.refreshToken);
      localStorage.setItem("studentAccessToken", data.data.accessToken);
      localStorage.setItem("studentEmail", data.data.newStudent.email);
      localStorage.setItem("studentId", data.data.newStudent.id);
      localStorage.setItem("studentRole", data.data.newStudent.role);
      notify();
    },

    onError: (data) => {
      errorRegister();
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<ILoginStudent>();

  const onHandleSubmit = (data: ILoginStudent) => {
    try {
      mutation.mutate(data);
      router.push("/student/profile");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Header name="Prihlásenie žiak" />
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
                  required: "Email is Required!!!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />

              <p className="text-red-800">
                {errors.email && errors.email.message}
              </p>
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
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
                required: "You must specify a password",
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
            </button>{" "}
            <br />
            <div className="mt-4"></div>
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

export default LoginForm;
