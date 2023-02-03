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
        retry: 2,
        placeholderData: placeholderCategory
    }
  );

  if(isError) {
    return <FallbackRender error="Nastala chyba" />
  }

  if(isLoading) {
    return <FallbackLoader />
  }

  const navigateToCategories = () => {
    router.push("/category");
  };

  console.log(data);

  return (
    <>
      <Header name="Detail Kategórie" />
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Meno kategórie</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Popis kategórie
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
    </>
  );
};

export default CategoryInfo;
