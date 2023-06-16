import GlobalErrorComponent from "@/components/shared/errors/GlobalErrorComponent";
import { NextPage } from "next";

const InternalServerPage: NextPage = () => {
  return (
    <GlobalErrorComponent statusCode="500" message="Chyba na strane applikácie" />
  );
};

export default InternalServerPage;
