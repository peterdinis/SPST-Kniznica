import InternalServerError from "@/components/shared/errors/InternalServerError";
import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return (
    <InternalServerError />
  );
};

export default ErrorPage;
