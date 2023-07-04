import Header from "@/components/shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  passwordChangeError,
  passwordChangeSuccess,
} from "@/components/shared/toasts/passwordToasts";
import * as mut from "@/api/mutations/studentMutations";
import {
  changePasswordSchema,
  changePasswordSchemaType,
} from "@/validators/student/studentSchema";
import Cookies from "js-cookie";
import { logoutToast } from "@/components/shared/toasts/adminToasts";

const NewPasswordForm: React.FC = () => {
  const router = useRouter();

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("studentAccessToken", {
      path: "/",
    });
    Cookies.remove("studentData", {
      path: "/",
    });
    Cookies.remove("studentRegisterData", {
      path: "/",
    });
    Cookies.remove("studentPersonalData", {
      path: "/",
    });
    window.location.replace("/student/login");
  };

  const mutation = useMutation(mut.studentChangePassword, {
    onSuccess: (data: any) => {
      logoutFromApp();
      console.log(data);
    },

    onError: (data: any) => {
      router.push("/password-failed");
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    register,
  } = useForm<changePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onHandleSubmit: SubmitHandler<changePasswordSchemaType> = (
    data: any
  ) => {
    try {
      mutation.mutate(data);
      passwordChangeSuccess();
      router.push("/student/login");
    } catch (err) {
      router.push("/failed");
      passwordChangeError();
      return;
    }
  };

  return (
    <>
      <Header name="Nové heslo" />
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
                id="Username"
                type="text"
                autoFocus
                placeholder="meno"
                {...register("username", {
                  required: true,
                })}
                onKeyUp={() => {
                  trigger("username");
                }}
              />

              <p className="text-red-800">
                {errors.username && errors.username.message}
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
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Heslo"
                type="password"
                autoFocus
                autoComplete="current-password"
                placeholder="********************************************"
                {...register("newPassword", {
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
                  trigger("newPassword");
                }}
              />
            </div>
            <div>
              <button
                className="mt-4 bg-red-700 rounded-lg p-2 text-white"
                type="submit"
              >
                Zmena hesla
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewPasswordForm;
