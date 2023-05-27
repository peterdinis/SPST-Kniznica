import Header from "../shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import { ILogin, ILoginStudentInfo } from "@/interfaces/IStudent";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/studentMutations";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import {
  createAdminRegisterType,
  loginAdminSchema,
} from "@/validators/admin/adminSchema";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const notify = () => toast.success("Prihlásenie bolo úspešné");
  const errorRegister = () => toast.error("Prihlásenie nebolo úspešné");
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    register,
  } = useForm<createAdminRegisterType>({
    resolver: zodResolver(loginAdminSchema),
  });

  const mutation = useMutation(mut.loginStudent, {
    onSuccess: (data: ILoginStudentInfo) => {
      Cookies.set("adminData", JSON.stringify(data));
      Cookies.set("studentAdminData", JSON.stringify(data.data.user));
      Cookies.set("adminAccessToken", JSON.stringify(data.data.token));
      notify();
      window.location.replace("/admin/profile");
    },

    onError: () => {
      router.push("/failed");
      errorRegister();
      return;
},
  });

  const onHandleSubmit: SubmitHandler<createAdminRegisterType> = (
    data: ILogin
  ) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Header name="Prihlásenie Admin" />
    </>
  );
};

export default LoginForm;
