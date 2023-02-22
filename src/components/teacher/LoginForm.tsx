import Link from "next/link";
import Header from "../shared/Header";
import { useRouter } from "next/router";
import {toast} from "react-toastify";
import {useMutation} from "@tanstack/react-query";
import * as mut from "../../api/mutations/teacherMutations";
import Cookies from "js-cookie";
import { ILoginTeacher, INewLoggedTeacher } from "@/api/interfaces/ITeacher";
import { useForm } from "react-hook-form";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Prihlásenie bolo úspešné");
  const errorRegister = () => toast.error("Prihlásenie nebolo úspešné");


  const mutation = useMutation(mut.loginTeacher, {
    onSuccess: (data: INewLoggedTeacher) => {
      Cookies.set("currentTeacher", JSON.stringify(data.data.existingTeacher));
      Cookies.set("teacherAccessToken", JSON.stringify(data.data.accessToken));
      notify();
    },

    onError: (data: INewLoggedTeacher) => {
      alert(data);
      console.log(data);
      errorRegister();
      router.push("/student/login");
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<ILoginTeacher>();

  const onHandleSubmit = (data: ILoginTeacher) => {
    return;
  }
  
  return (
    <>
      <Header name="Prihlásenie učiteľ" />
      <form>
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
                /*   {...register('username', {
                  required: true,
                  minLength: 5,
                  min: 5,
                })} */
              />

              {/*  <p className="text-red-800">
                {errors.username && errors.username.message}
              </p> */}
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
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="password"
              type="pasword"
              /*  type={passwordShown ? 'text' : 'password'} */
              placeholder="******************"
              autoFocus
              /*  {...register('password', {
                required: true,
                minLength: 5,
                min: 5,
              })} */
            />
            {/*  <p className="text-red-800">
              {errors.password && errors.password.message}
            </p> */}
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
