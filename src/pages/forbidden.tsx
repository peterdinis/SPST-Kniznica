import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { forbiddenError } from "@/components/shared/errors/constants/errorMessages";
import { NextPage } from "next";

const AuthFailed: NextPage = () => {
  return (
    <>
      <GlobalErrorComponent
        statusCode="403"
        message={forbiddenError}
      />
    </>
  );
};

export default AuthFailed;