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

const LoginForm: React.FC = () => {
    return (
        <>
         <Header name="Prihlásenie Admin" />
        </>
    )
}

export default LoginForm;