import { GlobalErrorComponent } from "@/components/shared/errors";
import { notFoundError } from "@/constants/errorMessages";
import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return <GlobalErrorComponent statusCode="404" message={notFoundError} />;
};

export default ErrorPage;
