import { toast } from "react-toastify";

export const createNotify = () => toast.success("Kategória bola vytvorená");
export const createErrorRegister = () => toast.error("Nepodarilo sa vytvoriť novú kategóriu");
export const allFieldsErrors = () => toast.error("Meno a popis nesmú byť prázdne");
export const deleteSuccess = () => toast.success("Podarilo sa zmazať kategóriu");
export const deleteError = () => toast.error("Nepodarilo sa zmazať kategóriu");
export const updateSuccess = () => toast.success("Kategória bola uprevná");
export const updateError = () => toast.error("Kategória nebola upravená");