import { AdminTeachers } from "@/components/admin";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllTeachersInApp: NextPage = () => {
    return (
       <AdminTeachers />
    )
}

export default PrivateRoute(AllTeachersInApp);