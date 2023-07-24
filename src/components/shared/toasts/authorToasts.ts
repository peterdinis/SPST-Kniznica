import { toast } from "react-toastify";

export const notify = () => toast.success("Nový autor bol vytvorený");
export const errorRegister = () => toast.error("Nový autor nebol vytvorený");

export const updateBookSuccess = () => toast.success("Autor bol upravený");
export const updateBookError = () => toast.error("Autor nebol upravený");

export const deleteBookError = () => toast.error("Autor nebol vytvorený");
export const deleteBookSuccess = () => toast.success("Autor bol vytvorený");