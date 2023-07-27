import { GlobalErrorComponent } from "@/components/shared/errors";
import { forbiddenError } from "@/constants/errorMessages";
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