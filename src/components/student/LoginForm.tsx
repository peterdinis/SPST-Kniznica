import Header from "../shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import { ILogin, ILoginStudentInfo } from "@/interfaces/IStudent";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/studentMutations";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudentRegisterType, loginStudentSchema } from "@/validators/student/studentSchema";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Prihlásenie bolo úspešné");
  const errorRegister = () => toast.error("Prihlásenie nebolo úspešné");
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    register,
  } = useForm<createStudentRegisterType>({
    resolver: zodResolver(loginStudentSchema)
  });

  const mutation = useMutation(mut.loginStudent, {
    onSuccess: (data: ILoginStudentInfo) => {
      Cookies.set("studentData", JSON.stringify(data));
      Cookies.set("studentAccessToken", JSON.stringify(data.data.token));
      notify();
      window.location.replace("/student/profile");
    },

    onError: (data: any) => {
        router.push("/failed");
        errorRegister();
        return;
    }
  })

  const onHandleSubmit: SubmitHandler<createStudentRegisterType> = (data: ILogin) => {
      mutation.mutate(data);
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
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Heslo"
                type="password"
                autoFocus
                autoComplete="current-password"
                placeholder="********************************************"
                {...register("password", {
                  required: "Zadajte heslo",
                  minLength: {
                    value: 8,
                    message: "Heslo nemá požadovaných 8 znakov",
                  },
                  maxLength: {
                    value: 20,
                    message: "Heslo má viac ako 20 znakov",
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
                disabled={isSubmitting}
              >
                Prihlásenie
              </button>
              <div>
                <Link
                  className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                  href="/student/register"
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
