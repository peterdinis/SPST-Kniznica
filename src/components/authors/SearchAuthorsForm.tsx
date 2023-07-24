import Header from "../shared/Header";
import * as api from "../../api/queries/authorQueries";
import Link from "next/link";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect} from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Box, Text, Progress} from "@chakra-ui/react";
import ScrollToTop from "@/hooks/useScroll";
import { IAuthor } from "@/interfaces/IAuthor";

const SearchAuthorsForm: React.FC = () => {
  const initialSearchValue: never[] = [];
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any>(initialSearchValue);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      api.searchForAuthors(debouncedSearchTerm).then((results: any) => {
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
      <Header name="Hľadanie konkretného spisovateľa" />
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
                <Progress variant="determinate" value={progress} />
              </Box>
              <Text>Vyhľadám...</Text>
            </div>
          )}

          {results.data === undefined ||
            (results.data.length === 0 && (
              <div className="text-center font-bold mt-4">
                Spisovateľ/ka nebol/a najdený/á <SentimentVeryDissatisfiedIcon />
              </div>
            ))}
        </form>
      </div>

      <>
        {results.data === undefined ? (
          <></>
        ) : (
          <>
            <div className="grid gap-8 space-x-1 lg:grid-cols-6">
              {results.data.map &&
                results.data.map((item: IAuthor) => {
                  return (
                    <>
                      <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                          <LazyLoadImage
                            alt="Placeholder"
                            className="h-auto w-full"
                            src={item.image}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-2xl text-gray-800">
                            {item.name}
                          </h3>
                          <div className="text-center mt-4">
                            <Link
                              className="link mt-10 bg-blue-200 p-2 rounded"
                              href={`/authors/detail/${item.id}`}
                            >
                              Detail
                            </Link>
                          </div>
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

export default SearchAuthorsForm;
