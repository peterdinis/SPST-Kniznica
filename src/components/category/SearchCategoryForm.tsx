import Header from "../shared/Header";
import * as api from "../../api/queries/categoryQueries";
import Link from "next/link";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect, Fragment } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ScrollToTop from "@/hooks/useScroll";
import { ICategory } from "@/interfaces/ICategory";

const SearchCategoryForm: React.FC = () => {
  const initialSearchValue: never[] = [];
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any>(initialSearchValue);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      api.searchForCategories(debouncedSearchTerm).then((results: any) => {
        setIsSearching(false);
        setResults(results);
      });
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Header name="Hľadanie konkretnej knihy" />
      <div className="flex justify-center align-top">
        <form className="mt-4">
          <input
            name="form"
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            placeholder="Hľadaj knihu.."
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {isSearching && (
            <div className="text-center mt-4 font-bold text-xl">
              <Box sx={{ display: "flex" }}>
                <CircularProgress variant="determinate" value={progress} />
              </Box>
              <Typography>Vyhľadám...</Typography>
            </div>
          )}

          {results.data === undefined ||
            (results.data.length === 0 && (
              <div className="text-center font-bold mt-4">
                Kniha nebola najdená <SentimentVeryDissatisfiedIcon />
              </div>
            ))}
        </form>
      </div>

      <>
        {results.data === undefined ? (
          <Fragment />
        ) : (
          <>
            <div className="grid gap-8 space-x-1 lg:grid-cols-6">
              {results.data.map &&
                results.data.map((item: ICategory) => {
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
          </>
        )}
      </>
    </>
  );
};

export default SearchCategoryForm;
