import dynamic from "next/dynamic";

export const AllCategories = dynamic(() => import("./AllCategories"));
export const CategoryInfo = dynamic(() => import("./CategoryInfo"));
export const CreateNewCategory = dynamic(() => import("./CreateNewCategory"));
export const FailedComponent = dynamic(() => import("./FailedComponent"));
export const Reasons = dynamic(() => import("./Reasons"));
export const SearchCategoryForm = dynamic(() => import("./SearchCategoryForm"));
