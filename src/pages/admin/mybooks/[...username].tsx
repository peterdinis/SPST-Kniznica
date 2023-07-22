import { MyBooks } from "@/components/admin";
import { Header } from "@/components/shared";
import { NextPage } from "next";

const MyBorrowedBooks: NextPage = () => {
    return (
        <>
         <Header name="Moje požičané knihy" />
         <MyBooks />
        </>
    )
}

export default MyBorrowedBooks;