import Header from "../shared/Header";
import * as api from "../../api/queries/categoryQueries"
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

const CategoryInfo: React.FC = () => {
    const router = useRouter();

    const {id}= router.query;

    console.log(Number(id));

    const { data, isError } = useQuery(
        ['categoryDetail', Number(id)],
        () => api.getOneCategory(Number(id) as any));


    console.log(data);

    const navigateToCategories = () => {
        router.push("/category");
    }
    return (
        <>
         <Header name="Detail Kategórie" />
        </>
    )
}

export default CategoryInfo;