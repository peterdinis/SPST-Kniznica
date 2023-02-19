import Header from "../shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/bookQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";
import Link from "next/link";
import ScrollToTop from "@/hooks/useScroll";
import { IBook } from "@/api/interfaces/IBook";
import { AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
/* TODO: Fix broken pagination */
import { useState, Suspense } from "react";
import SkeletonLoader from "../shared/SkeletonLoader";
import { placeholderBook } from "@/data/placeholderBook";

const AllBooks: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, isError, isLoading } = useQuery(["allBooks"], api.getBooks, {
    retry: 2,
    placeholderData: placeholderBook,
  });

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  return (
    <Suspense fallback={<SkeletonLoader />}>
      <Header name="Všetky knihy" />
      <div className="mt-4 font-bold text-center text-red-800 text-xl">
        <Link href="/books/search">Hľadať konkretnú knihu</Link>
      </div>
      <AnimatePresence>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {isError}</div>
        ) : (
          <div>
            <div className="grid gap-8 space-x-1 lg:grid-cols-6">
              {data.length === 0 && (
                <div>Nenašli sa žiadne knihy</div>
              )}

              {data &&
                data.map((item: IBook) => {
                  return (
                    <>
                      <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                          <LazyLoadImage
                            alt="Placeholder"
                            className="h-auto w-full rounded-lg"
                            src={item.image}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-2xl text-gray-800">
                            {item.name} - {item.author}
                          </h3>
                          <div className="text-center mt-4">
                            <Link
                              className="link mt-10 bg-blue-200 p-2 rounded"
                              href={`/books/${item.id}`}
                            >
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              <ScrollToTop />
            </div>
          </div>
        )}
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
          <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.1665 4H12.8332"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.1665 4L4.49984 7.33333"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.1665 4.00002L4.49984 0.666687"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm ml-3 font-medium leading-none ">Predchadzajúca stránka</p>
            </div>
            <div className="sm:flex hidden">
              <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                1
              </p>
              <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                2
              </p>
              <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                3
              </p>
              <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">
                4
              </p>
              <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                5
              </p>
              <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                6
              </p>
              <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                7
              </p>
              <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                8
              </p>
            </div>
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
              <p className="text-sm font-medium leading-none mr-3">Ďalšia stránka</p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.1665 4H12.8332"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 7.33333L12.8333 4"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 0.666687L12.8333 4.00002"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/*  <span>Current Page: {page + 1}</span>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </button>{" "}
        <button
          onClick={() => {
            if (!isPreviousData && paginatedData.data.hasMore) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !paginatedData.data.hasMore}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}{" "} */}
      </AnimatePresence>
    </Suspense>
  );
};

export default AllBooks;
