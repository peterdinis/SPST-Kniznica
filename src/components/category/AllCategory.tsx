import Header from "../shared/Header";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/categoryQueries";
import { ICategory } from "@/api/interfaces";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";
import { placeholderCategory } from "@/data/placeholderCategory";
import autoAnimate from "@formkit/auto-animate";
import {useEffect, useRef} from "react";

const AllCategory: React.FC = () => {
  const parentRef = useRef(null);
  const { data, isLoading, isError } = useQuery(
    ["categories"],
    api.getCategories,
    {
      retry: 2,
      placeholderData: placeholderCategory,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);   
    }
  }, [parent]);

  return (
    <>
      <Header name="Všetky kategórie" />
      <div className="flex justify-center align-top">
        <form>
          <input
            name="form"
            className="text-gray-600 mt-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Hľadaj knihu"
          />
        </form>
      </div>
      <div ref={parentRef} className="w-full mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data &&
          data.map((item: ICategory) => {
            return (
              <>
                <div className="bg-whiterounded py-5 pl-6 flex items-start shadow">
                  <div className="pl-3 pr-10 mt-1">
                    <h3 className="font-normal leading-4 text-red-800 text-2xl">
                      <Link href={`/category/${item.id}`}>{item.name}</Link>
                    </h3>
                    <h3 className="mt-4 leading-4 text-gray-800 text-lg">
                      <Link href={`/category/${item.id}`}>
                        {item.description}
                      </Link>
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default AllCategory;
