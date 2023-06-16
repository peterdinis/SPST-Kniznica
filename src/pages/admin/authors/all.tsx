import AdminAuthors from "@/components/admin/authors/AdminAuthors";
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