import dynamic from "next/dynamic";

export const AllBooks = dynamic(() => import("./AllBooks"));
export const BookInfo = dynamic(() => import("./BookInfo"));
export const CreateBookForm = dynamic(() => import("./CreateBookForm"));
export const Reasons = dynamic(() => import("./Reasons"));
export const SearchBookForm = dynamic(() => import("./SearchBookForm"));