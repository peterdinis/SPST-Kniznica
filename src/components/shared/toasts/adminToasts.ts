import { toast } from "react-toastify";

export const deleteSuccess = () => toast.success("Zmazanie kategórie bolo úspešné");
export const deleteFailed = () =>toast.error("Zmazanie kategórie bolo neuspešné");
export const updateSuccess = () => toast.success("Kategória bola upravená");
export const updateFailed = () => toast.error("Kategória nebola upravená");
export const logoutToast = () => toast.success("Odhlásenie bolo úspešné");