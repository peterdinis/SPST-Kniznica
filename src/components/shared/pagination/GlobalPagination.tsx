/*
import IoArrowBack from "@chakra-ui/icons";
import { IoArrowForward } from "react-icons/io5";
import { FallbackLoader } from "..";
import { Icon } from "@chakra-ui/react";


interface IPaginationPage{
  isFetching: boolean;
  page: number;
  setPage: (arg: number) => number;
}


const GlobalPagination: React.FC<IPaginationPage> = ({isFetching, page, setPage}: IPaginationPage) => {
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 0}
            className="text-sm ml-3 font-medium leading-none "
          >
            <Icon as={IoArrowBack} boxSize={6} />
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
            <Icon as={IoArrowForward} boxSize={6} />
          </button>
        </div>
        {isFetching ? <FallbackLoader /> : null}
      </div>
    </div>
  );
};

export default GlobalPagination;

*/