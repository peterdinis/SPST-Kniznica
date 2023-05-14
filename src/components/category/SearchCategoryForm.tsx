import Header from "../shared/Header";
import * as api from "../../api/queries/categoryQueries";
import Link from "next/link";
import { ICategory } from "@/interfaces/ICategory";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect, Fragment } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ScrollToTop from "@/hooks/useScroll";

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
  return <></>;
};

export default SearchCategoryForm;
