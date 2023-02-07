import Header from "../shared/Header";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/bookQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";
import { queryClient } from "@/api/queryClient";
import Link from "next/link";
import ScrollToTop from "@/hooks/useScroll";
import { placeholderBook } from "@/data/placeholderBook";
import { IBook } from "@/api/interfaces/IBook";
import InfiniteScroll from 'react-infinite-scroller';

const AllBooks: React.FC = () => {
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
    <>
      <Header name="Všetky knihy" />
      <div className="grid gap-8 space-x-1 lg:grid-cols-6">
        {data.length === 0 && <div>Nenašli sa žiadne knihy</div>}

        {data &&
          data.map((item: IBook) => {
            return (
              <>
                <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                    <img
                      alt="Placeholder"
                      className="h-auto w-full"
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
    </>
  );
};

export default AllBooks;
