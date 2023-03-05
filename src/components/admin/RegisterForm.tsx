import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/adminQueries"
import { queryClient } from "@/api/queryClient";

const RegisterForm: React.FC = () => {
    const {data, isLoading, isError} = useQuery(["adminExample"], api.getExampleData);
    queryClient.setQueryData(["adminExample"], data);
    
    return (
        <>
        ffff
        </>
    )
}

export default RegisterForm;