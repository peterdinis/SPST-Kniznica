import Header from "../shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import { IRegister } from "@/interfaces/IStudent";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/studentMutation";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudentRegisterType, registerStudentSchema } from "@/validators/student/studentSchema";

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Registrácia bola úspešná");
  const errorRegister = () => toast.error("Registrácia nebola úspešná");

  const mutation = useMutation(mut.register);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    register,
  } = useForm<createStudentRegisterType>({
    resolver: zodResolver(registerStudentSchema)
  });

  const onHandleSubmit: SubmitHandler<createStudentRegisterType> = (data: IRegister) => {
    try {
      Cookies.set("studentRegisterData", JSON.stringify(data));
      mutation.mutate(data);
      notify();
      router.push("/student/login");
    } catch (err) {
      errorRegister();
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
                htmlFor="name"
              >
                Meno
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Meno"
                type="text"
                autoFocus
                autoComplete="Meno"
                placeholder="Meno"
                {...register("name", {
                  required: true,
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />

              <p className="text-red-800">
                {errors.name && errors.name.message}
              </p>
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Priezivsko
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Priezivsko"
                type="text"
                autoFocus
                autoComplete="priezivsko"
                placeholder="Priezivsko"
                {...register("lastName", {
                  required: true,
                })}
                onKeyUp={() => {
                  trigger("lastName");
                }}
              />

              <p className="text-red-800">
                {errors.lastName && errors.lastName.message}
              </p>
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="userName"
              >
                Používateľské meno
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="email"
                type="text"
                autoFocus
                placeholder="Používateľské meno"
                {...register("username", {
                  required: "Používateľské meno je povinné",
                })}
                onKeyUp={() => {
                  trigger("username");
                }}
              />

              {errors.username && errors.username.type === "required" && (
                <p className="text-red-800">Používateľské meno je povinné</p>
              )}
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="email"
                type="email"
                autoFocus
                placeholder="Email"
                {...register("email", {
                  required: "Email je povinný",
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
                htmlFor="role"
              >
                Rola
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Heslo"
                type="text"
                autoFocus
                placeholder="STUDENT"
                {...register("role", {
                  required: "Rola je povinný",
                })}
                onKeyUp={() => {
                  trigger("role");
                }}
              />

              <p className="text-red-800">
                {errors.role && errors.role.message}
              </p>
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="classRoom"
              >
                Trieda
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Heslo"
                type="text"
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
            </div>
            <div>
              <button
                className="mt-4 bg-red-700 rounded-lg p-2 text-white"
                type="submit"
                disabled={isSubmitting}
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
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
