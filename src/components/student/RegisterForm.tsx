import Header from "../shared/Header";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { IRegisterUser } from "@/api/interfaces/IUser";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../api/mutations/studentMutation";

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Registrácia bola úspešná");
  const errorRegister = () => toast.error("Registrácia nebola úspešná");

  const mutation = useMutation(api.registerStudent, {
    onSuccess: (data) => {
      console.log(data);
      notify();
    },

    onError: () => {
      errorRegister();
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<IRegisterUser>();

  const onHandleSubmit = (data: IRegisterUser) => {
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
                  minLength: 5,
                  min: 5,
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />

              <p className="text-red-800">
                {errors.name && errors.name.message}
              </p>
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
                minLength: 5,
                min: 5,
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
              {errors.lastName && errors.lastName.message}
            </p>
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
              placeholder="Heslo"
              {...register('password', {
                required: 'You must specify a password',
                pattern: {
                  value:
                    '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){    1,})(?!.*s).{8,}$' as any,
                  message:
                    'Password should contain at least one number and one    special character',
                },
                minLength: {
                  value: 8,
                  message: 'Password must be more than 8 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Password must be less than 20 characters',
                },
              })}
              onKeyUp={() => {
                trigger('password');
              }}
            />

            <p className="text-red-800">
              {errors.lastName && errors.lastName.message}
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
              id="Rola"
              type="text"
              autoFocus
              placeholder="Rola"
              value="STUDENT"
              readOnly
            />

            <p className="text-red-800">
              {errors.lastName && errors.lastName.message}
            </p>
          </div>
          <div>
            <button
              className="mt-4 bg-red-700 rounded-lg p-2 text-white"
              type="submit"
            >
             Registrácia
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/login"
              >
                Prihlásenie
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
