import { AdminStudents } from "@/components/admin";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllStudentsInApp: NextPage = () => {
    return (
       <AdminStudents />
    )
}

export default PrivateRoute(AllStudentsInApp);