import Header from "../shared/Header";
import * as api from "../../api/queries/categoryQueries";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderCategory } from "@/data/placeholderCategory";

const CategoryInfo: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["categoryDetail", Number(id)],
    () => api.getOneCategory(Number(id) as any), {
        placeholderData: placeholderCategory
    }
  );

  if(isError) {
    return <FallbackRender error="Something went wrong" />
  }

  if(isLoading) {
    return <FallbackLoader />
  }

  const navigateToCategories = () => {
    router.push("/category");
  };
  return (
    <>
      <Header name="Detail Kategórie" />
    </>
  );
};

export default CategoryInfo;
