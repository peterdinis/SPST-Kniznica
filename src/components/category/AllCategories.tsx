import Header from "../shared/Header";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/categoryQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/FallbackRender";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ICategory } from "@/interfaces/ICategory";
import ScrollToTop from "@/hooks/useScroll";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useState } from "react";
import { IPaginatedCategories } from "@/data/placeholderPaginatedCategories";

const AllCategories: React.FC = () => {
  const [page, setPage] = useState(0);
  const [limit] = useState(12);

  let initialCategories: IPaginatedCategories | any; 
  const {
    data: paginatedData,
    isError,
    isFetching,
    isLoading,
    isPreviousData,
  } = useQuery(
    ["paginateCategories", page],
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
    return <FallbackRender error="Nastala chyba" />;
  }

  return (
    <>
      <Header name="Všetky kategórie" />
       <div className="mt-4 font-bold text-center text-red-800 text-xl">
        <Link href="/category/search">Hľadať konkretnú kategóriu</Link>
      </div>
      <div className="w-full mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {paginatedData.data.result.length === 0 && (
          <div className="text-center font-bold mt-4">
            Nenašli sa žiadne kategórie <SentimentVeryDissatisfiedIcon />
          </div>
        )}
        {paginatedData.data.result &&
          paginatedData.data.result.map((item: ICategory) => {
            return (
              <>
                <div className="bg-whiterounded py-5 pl-6 flex items-start shadow">
                  <div className="pl-3 pr-10 mt-1">
                    <h3 className="font-normal leading-4 text-red-800 text-2xl break-all">
                      <Link
                        id="categoryName"
                        href={`/category/detail/${item.externalId}`}
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <h3 className="mt-4 leading-4 text-gray-800 text-lg break-all">
                      <Link href={`/category/detail/${item.externalId}`}>
                        {item.description}
                      </Link>
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <ScrollToTop />
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            <button
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0}
              className="text-sm ml-3 font-medium leading-none "
            >
              <ArrowBackIcon />
            </button>
          </div>
          <span className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            Aktuálna stránka: {page + 1}
          </span>
          <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            <button
              onClick={() => {
                if (!isPreviousData && paginatedData.data.hasNextPage) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={isPreviousData || !paginatedData.data.hasNextPage}
              className="text-sm font-medium leading-none mr-3"
            >
              <ArrowForwardIcon />
            </button>
          </div>
          {isFetching ? <FallbackLoader /> : null}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
