import { AdminBooks } from "@/components/admin";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllAdminBooks: NextPage = () => {
    return (
        <AdminBooks />
    )
}

export default PrivateRoute(AllAdminBooks);