import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicLogin = dynamic(() => import("@/components/student/LoginForm"), {
    ssr: false
})

const LoginStudentPage: NextPage = () => {
    return (
       <DynamicLogin />
    )
}


export default LoginStudentPage;