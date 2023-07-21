import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { failedLoginError } from "@/constants/errorMessages";

import { NextPage } from "next";

const AuthFailed: NextPage = () => {
  return (
    <>
      <GlobalErrorComponent
        statusCode="401"
        message={failedLoginError}
      />
    </>
  );
};

export default AuthFailed;
