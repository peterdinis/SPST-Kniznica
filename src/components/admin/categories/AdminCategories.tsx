import Header from "@/components/shared/Header";
import * as api from "../../../api/queries/categoryQueries";
import { useQuery, useMutation } from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/FallbackRender";
import { ICategory } from "@/interfaces/ICategory";
import {useState} from "react";
import { IPaginatedCategories } from "@/data/placeholderPaginatedCategories";
import { getAllCategoriesError } from "@/components/shared/errors/constants/errorMessages";
import ScrollToTop from "@/hooks/useScroll";
import ReturnModal from "@/components/shared/modals/ReturnModal";
import * as mut from "../../../api/mutations/categoryMutation";
import {toast} from "react-toastify";

const AdminCategories: React.FC = () => {
  const [page] = useState(0);
  const [limit] = useState(12);

  const deleteSuccess = () => toast.success("Zmazanie kategórie bolo úspešné");
  const deleteFailed = () =>toast.error("Zmazanie kategórie bolo neuspešné");
  const updateSuccess = () => toast.success("Kategória bola upravená");
  const updateFailed = () => toast.error("Kategória nebola upravená");

  let initialCategories: IPaginatedCategories | any;
  
  const { data, isError, isLoading } = useQuery(
    ["paginateBooks", page],
    () => api.paginateCategories(page, limit),
    {
      keepPreviousData: true,
      initialData: initialCategories,
      retry: 2,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error={getAllCategoriesError} />;

  }

    const deleteCategoryMutation = useMutation(mut.deleteCategory(data.id as unknown as number) as any, {
      onSuccess: () => {
        deleteSuccess();
      },

      onError: () =>{
        deleteFailed();
      }
    });

    const onDeleteSubmit = (data: void) => {
      deleteCategoryMutation.mutate(data);
    }

  return (
    <>
      <Header name="Všetky kategórie" />
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Id kategórie</th>
                  <th className="px-4 py-3">Názov kategórie</th>
                  <th className="px-4 py-3">Popis kategórie</th>
                  <th className="px-4 py-3">Uprav kategóriu</th>
                  <th className="px-4 py-3">Zmaž kategóriu</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.data.result &&
                  data.data.result.map((item: ICategory) => {
                    return (
                      <>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold text-black">
                                  {item.id}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            {item.name}
                          </td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-bold rounded-sm">
                              {" "}
                              {item.description}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold   rounded-sm">
                              {" "}
                              <ReturnModal
                                btnName={"Upraviť kategóriu"}
                                modalHeader={"Upraviť kategóriu"}
                              >
                                fkfkf
                              </ReturnModal>
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold   rounded-sm">
                              <ReturnModal
                                btnName={"Zmazať kategóriu"}
                                modalHeader={"Zmazať kategóriu"}
                              >
                                fkfkf
                              </ReturnModal>
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <ScrollToTop />
      </section>
    </>
  );
};

export default AdminCategories;
