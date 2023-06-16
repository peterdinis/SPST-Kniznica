import CreateNewCategory from "@/components/category/CreateNewCategory";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const CreateCategoryPage: NextPage = () => {
    return (
        <CreateNewCategory />
    )
}

export default PrivateRoute(CreateCategoryPage);