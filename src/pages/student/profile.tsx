import { MyProfile } from "@/components/student";
import AccessRoute from "@/routes/AccessRoute";
import { NextPage } from "next";

const ProfileStudentPage: NextPage = () => {
    return (
      <MyProfile />
    )
}


export default AccessRoute(ProfileStudentPage);