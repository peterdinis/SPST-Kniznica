import Header from "../shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/authorQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/FallbackRender";
import Link from "next/link";
import ScrollToTop from "@/hooks/useScroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { IAuthor } from "@/interfaces/IAuthor";
import { getAllAuthorsError } from "../shared/errors/constants/errorMessages";
import { motion } from "framer-motion";

const GetAllAuthors: React.FC = () => {
  const [page, setPage] = useState(0);
  const [limit] = useState(12);
  const {
    data: paginatedData,
    isError,
    isFetching,
    isLoading,
    isPreviousData,
  } = useQuery(
    ["paginateAuthors", page],
    () => api.paginateAuthors(page, limit),
    {
      keepPreviousData: true,
      retry: 2,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error={getAllAuthorsError} />;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <Header name="Všetci spisovatelia" />
      <div className="mt-4 font-bold text-center text-red-800 text-xl">
        <Link href="/authors/search">Hľadať konkretného authora </Link>
      </div>
      <div className="grid gap-8 space-x-1 lg:grid-cols-6">
        {paginatedData?.data.result.length === 0 && (
          <div className="text-center font-bold mt-4">
            Žiadných spisovateľov som nenanšiel{" "}
            <SentimentVeryDissatisfiedIcon />
          </div>
        )}
        {paginatedData?.data.result &&
          paginatedData?.data.result.map((item: IAuthor, index: number) => {
            return (
              <motion.div
                key={item.id}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                    {item.image === null ? (
                      <LazyLoadImage
                        alt="Placeholder"
                        className="h-auto w-full rounded-lg"
                        src="https://picsum.photos/200/300"
                      />
                    ) : (
                      <LazyLoadImage
                        alt="Placeholder"
                        className="h-auto w-full rounded-lg"
                        src={item.image}
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl text-gray-800 break-all">
                      {item.name} - {item.lastName}
                    </h3>
                    <div className="text-center mt-4">
                      <Link
                        className="link mt-10 bg-blue-200 p-2 rounded"
                        href={`/authors/detail/${item.externalId}`}
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
                <ScrollToTop />
              </motion.div>
            );
          })}
      </div>
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
                if (!isPreviousData && paginatedData?.data.hasNextPage) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={isPreviousData || !paginatedData?.data.hasNextPage}
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

export default GetAllAuthors;
