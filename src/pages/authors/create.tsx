import { CreateAuthorForm } from "@/components/authors";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const CreateNewAuthorPage: NextPage = () => {
    return (
        <CreateAuthorForm />
    )
}

export default PrivateRoute(CreateNewAuthorPage);