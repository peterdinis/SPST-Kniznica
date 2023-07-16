import dynamic from "next/dynamic";

export const Reasons = dynamic(() => import("./Reasons"));
export const SearchAuthorsForm = dynamic(() => import("./SearchAuthorsForm"));
export const FailedComponent = dynamic(() => import("./FailedComponent"));
export const GetAllAuthors = dynamic(() => import("./GetAllAuthors"));
export const CreateAuthorForm = dynamic(() => import("./CreateAuthorForm"));
export const AuthorDetail = dynamic(() => import("./AuthorDetail"));