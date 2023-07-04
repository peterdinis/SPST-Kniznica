import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { NextPage } from "next";

const AuthFailed: NextPage = () => {
  return (
    <>
      <GlobalErrorComponent
        statusCode="401"
        message="Zmena hesla nebola úspšená"
      />
    </>
  );
};

export default AuthFailed;
