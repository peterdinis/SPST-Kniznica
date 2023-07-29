import { GlobalErrorComponent } from "@/components/shared/errors";
import { apiError } from "@/constants/errorMessages";
import { NextPage } from "next";

const InternalServerPage: NextPage = () => {
  return (
    <GlobalErrorComponent
      statusCode="500"
      message={apiError}
    />
  );
};

export default InternalServerPage;
