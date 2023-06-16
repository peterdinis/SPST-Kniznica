import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return (
    <GlobalErrorComponent statusCode="404" message="Stránka nebola najdená" />
  );
};

export default ErrorPage;
