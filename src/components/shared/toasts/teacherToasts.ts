import {toast} from "react-toastify";

export const deleteTeacherSuccess = () =>toast.success("Učiteľ bol zmazaný plus jeho požičané knihy");

export const deleteTeacherError = () =>toast.error("Učiteľ nebol zmazaný");