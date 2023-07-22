import { AdminAuthors } from "@/components/admin";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllAuthorsPage: NextPage = () => {
    return (
        <>
         <AdminAuthors />
        </>
    )
}

export default PrivateRoute(AllAuthorsPage);