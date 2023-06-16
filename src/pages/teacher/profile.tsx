import MyProfile from "@/components/teacher/MyProfile";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const ProfileTeacherPage: NextPage = () => {
    return (
        <MyProfile />
    )
}


export default PrivateRoute(ProfileTeacherPage);