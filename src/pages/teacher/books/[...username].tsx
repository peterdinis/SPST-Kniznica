import Header from "@/components/shared/Header";
import MyBooks from "@/components/teacher/profile/MyBooks";
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