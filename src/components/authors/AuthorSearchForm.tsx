import Header from "../shared/Header";
import * as api from "../../api/queries/authorQueries"
import Link from "next/link";
import { IAuthor } from "@/interfaces/IAuthor";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect, Fragment } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ScrollToTop from "@/hooks/useScroll";

const AuthorSearchForm: React.FC = () => {
  return (
    <>
      <Header name="Hľadať spisovateľa" />
      <div className="flex justify-center align-top">
        <form className="mt-4">
          <input
            name="form"
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            placeholder="Hľadaj spisovateľa..."
          />
        </form>
      </div>
    </>
  );
};

export default AuthorSearchForm;
