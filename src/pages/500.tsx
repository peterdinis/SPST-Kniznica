import InternalServerError from "@/components/shared/errors/InternalServerError";
import { NextPage } from "next";

const InternalServerPage: NextPage = () => {
  return (
    <InternalServerError />
  );
};

export default InternalServerPage;
