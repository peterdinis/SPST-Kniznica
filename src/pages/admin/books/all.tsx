import AdminBooks from "@/components/admin/books/AdminBooks";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllAdminBooks: NextPage = () => {
    return (
        <AdminBooks />
    )
}

export default PrivateRoute(AllAdminBooks);