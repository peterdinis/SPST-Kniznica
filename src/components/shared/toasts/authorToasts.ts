import { toast } from "react-toastify";

export const allAuthorFieldsError = () =>toast.error("Všetky veci musia byť vyplenené pri tvorbe nového autora");

export const notify = () => toast.success("Nový autor bol vytvorený");
export const errorRegister = () => toast.error("Nový autor nebol vytvorený");

export const updateAuthorSuccess = () => toast.success("Autor bol upravený");
export const updateAuthorError = () => toast.error("Autor nebol upravený");

export const deleteAuthorError = () => toast.error("Autor nebol vytvorený");
export const deleteAuthorSuccess = () => toast.success("Autor bol vytvorený");