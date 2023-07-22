import { ProfilePage } from "@/components/admin";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AdminProfilePage: NextPage = () => {
    return (
       <ProfilePage />
    )
}

export default PrivateRoute(AdminProfilePage);