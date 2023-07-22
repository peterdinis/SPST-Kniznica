import { Header } from "@/components/shared";
import { MyBooks } from "@/components/teacher";
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