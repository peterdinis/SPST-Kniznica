import { useQuery, useMutation } from "@tanstack/react-query";
import * as api from "../../api/queries/adminQueries";
import { queryClient } from "@/api/queryClient";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/ErrorRender";
import Header from "../shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import * as mut from "../../api/mutations/adminMutations";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAdminRegisterType, createAdminSchema } from "@/validators/admin/adminSchema";
import { IRegister } from "@/interfaces/IAdmin";

const RegisterForm: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    ["adminExample"],
    api.getAdminExampleData
  );
  queryClient.setQueryData(["adminExample"], data);

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  const router = useRouter();

  const notify = () => toast.success("Registrácia bola úspešná");
  const errorRegister = () => toast.error("Registrácia nebola úspešná");

  const mutation = useMutation(mut.register);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    register,
  } = useForm<createAdminRegisterType>({
    resolver: zodResolver(createAdminSchema)
  });

  // TODO: Fix typing
  const onHandleSubmit: SubmitHandler<createAdminRegisterType> = (data: IRegister | any) => {
    try {
      Cookies.set("studentAdminData", JSON.stringify(data));
      mutation.mutate(data);
      notify();
      router.push("/admin/login");
    } catch (err) {
      router.push("/failed");
      errorRegister();
      return;
    }
  };
  return (
    <>
      <Header name="Registrácia Admin" />
    </>
  );
};

export default RegisterForm;
