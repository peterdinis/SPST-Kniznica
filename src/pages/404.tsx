import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { notFoundError } from "@/components/shared/errors/constants/errorMessages";
import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return <GlobalErrorComponent statusCode="404" message={notFoundError} />;
};

export default ErrorPage;
