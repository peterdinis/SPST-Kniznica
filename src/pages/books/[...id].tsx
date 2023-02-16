import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicDetail= dynamic(() => import("../../components/books/BookInfo"), {
    ssr: false
  })
  

const BookDetailPage: NextPage = () => {
    return (
       <DynamicDetail />
    )
}

export default BookDetailPage