import AdminStudents from "@/components/admin/students/AdminStudents";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllStudentsInApp: NextPage = () => {
    return (
       <AdminStudents />
    )
}

export default PrivateRoute(AllStudentsInApp);