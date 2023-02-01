import Header from "../shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/bookQueries"
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";

const AllBooks: React.FC = () => {
    const { data, isError, isLoading } = useQuery(['allBooks'], api.getBooks);

    if(isLoading) {
        return <FallbackLoader />
    }

    if(isError) {
        return <FallbackRender error="Nastala chyba" />
    }
    return (    
        <>
         <Header name="Všetky knihy" />
        </>
    )
}

export default AllBooks;