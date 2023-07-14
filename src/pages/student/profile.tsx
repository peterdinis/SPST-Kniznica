import MyProfile from "@/components/student/MyProfile";
import AccessRoute from "@/routes/AcessRoute";
import { NextPage } from "next";

const ProfileStudentPage: NextPage = () => {
    return (
      <MyProfile />
    )
}


export default AccessRoute(ProfileStudentPage);