import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { NextPage } from "next";

const AuthFailed: NextPage = () => {
  return (
    <>
      <GlobalErrorComponent
        statusCode="401"
        message="Prihlásenie nebolo úspešne"
      />
    </>
  );
};

export default AuthFailed;
