import { toast } from "react-toastify";

export const notify = () => toast.success("Registrácia bola úspešná");
export const errorRegister = () => toast.error("Registrácia nebola úspešná");
export const userAlreadyExistsToast = () => toast.error("Používateľ už existuje");
export const emailAlreadyExistsToast = () => toast.error("Email už existuje");