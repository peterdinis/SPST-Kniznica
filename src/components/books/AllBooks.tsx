import Header from "../shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/bookQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";
import Link from "next/link";
import ScrollToTop from "@/hooks/useScroll";
import { placeholderBook } from "@/data/placeholderBook";
import { IBook } from "@/api/interfaces/IBook";
import { AnimatePresence } from "framer-motion";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect} from "react";

const AllBooks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
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

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      api.searchForBooks(debouncedSearchTerm).then((results: any) => {
        setIsSearching(false);
        setResults(results);
      });
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  console.log(results);

  return (
    <>
      <Header name="Všetky knihy" />
      <div className="flex justify-center align-top">
        <form>
          <input
            name="form"
            className="text-gray-600 mt-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Hľadaj knihu"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {isSearching && <div className="mt-4 font-bold">Hľadám ...</div>}
        </form>
      </div>
      <AnimatePresence>
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
      </AnimatePresence>
    </>
  );
};

export default AllBooks;
