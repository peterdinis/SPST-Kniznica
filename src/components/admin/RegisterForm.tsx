import { useQuery, useMutation } from "@tanstack/react-query";
import * as api from "../../api/queries/adminQueries"
import { queryClient } from "@/api/queryClient";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/ErrorRender";
import Header from "../shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";

const RegisterForm: React.FC = () => {
    const {data, isLoading, isError} = useQuery(["adminExample"], api.getAdminExampleData);
    queryClient.setQueryData(["adminExample"], data);

    if(isLoading) {
        return <FallbackLoader />
    }

    if(isError) {
        return <FallbackRender error="Nastala chyba" />
    }

    return (
        <>
            <Header name="Registrácia Admin" />
        </>
    )
}

export default RegisterForm;