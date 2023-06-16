import CreateAuthorForm from "@/components/authors/CreateAuthorForm";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const CreateNewAuthorPage: NextPage = () => {
    return (
        <CreateAuthorForm />
    )
}

export default PrivateRoute(CreateNewAuthorPage);