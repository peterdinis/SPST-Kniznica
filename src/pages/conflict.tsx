import { GlobalErrorComponent } from "@/components/shared/errors";
import { conflictError} from "@/constants/errorMessages";
import { NextPage } from "next";

const ConflictPage: NextPage = () => {
  return <GlobalErrorComponent statusCode="409" message={conflictError} />;
};

export default ConflictPage;
