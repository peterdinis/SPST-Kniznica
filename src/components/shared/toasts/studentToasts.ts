import {toast} from "react-toastify";

export const deleteStudentSuccess = () =>toast.success("Študent bol zmazaný plus jeho požičané knihy");

export const deleteStudentError = () =>toast.error("Študent nebol zmazaný");