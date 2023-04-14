import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/authorQueries"
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/ErrorRender";
import { FixedSizeList } from 'react-window';

const AuthorList: React.FC = () => {
    const {data, isLoading, isError} = useQuery(["authors"], api.getAuthors);

    if(isLoading) {
        return <FallbackLoader />
    }

    if(isError) {
        return <FallbackRender error={"Nastala chyba"} />
    }

    return (
     <>jjj</>
    )
}

export default AuthorList;