import MyBorrowedBooks from "@/components/booking/student/[...username]";
import { NextPage } from "next"

const MyStudentBorrowedBooks: NextPage = () => {
    return (
        <MyBorrowedBooks />
    )
}

export default MyStudentBorrowedBooks;