import { CreateBookForm } from "@/components/books";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const CreateNewBookPage: NextPage = () => {
    return (
        <CreateBookForm />
    )
}

export default PrivateRoute(CreateNewBookPage);