import { CreateNewCategory } from "@/components/category";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const CreateCategoryPage: NextPage = () => {
    return (
        <CreateNewCategory />
    )
}

export default PrivateRoute(CreateCategoryPage);