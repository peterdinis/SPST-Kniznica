import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/adminQueries"
import { queryClient } from "@/api/queryClient";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";

const RegisterForm: React.FC = () => {
    const {data, isLoading, isError} = useQuery(["adminExample"], api.getExampleData);
    queryClient.setQueryData(["adminExample"], data);

    if(isLoading) {
        return <FallbackLoader />
    }

    if(isError) {
        return <FallbackRender error="Nastala chyba" />
    }

    return (
        <>
        ffff
        </>
    )
}

export default RegisterForm;