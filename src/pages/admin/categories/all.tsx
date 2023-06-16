import AdminCategories from "@/components/admin/categories/AdminCategories";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllAdminCategories: NextPage = () =>{
    return (
        <AdminCategories />
    )
}

export default PrivateRoute(AllAdminCategories);