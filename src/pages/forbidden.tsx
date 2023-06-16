import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { NextPage } from "next";

const AuthFailed: NextPage = () => {
  return (
    <>
      <GlobalErrorComponent statusCode="403" message="K tejto stránke nemáte prístup" />
    </>
  );
};


export default AuthFailed