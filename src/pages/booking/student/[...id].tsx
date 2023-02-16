import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicBorrowedBooks = dynamic(() => import("../../../components/student/MyBorrowedBooks"), {
    ssr: false
  })
  

const MyBorrowedBooks: NextPage = () => {
    return (
       <DynamicBorrowedBooks />
    )
}

export default MyBorrowedBooks