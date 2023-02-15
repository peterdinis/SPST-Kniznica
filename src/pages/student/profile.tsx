import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicProfile = dynamic(() => import("@/components/student/MyProfile"), {
    ssr: false
});

const ProfileStudentPage: NextPage = () => {
    return (
       <DynamicProfile />
    )
}


export default ProfileStudentPage;