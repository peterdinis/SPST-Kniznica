import { toast } from "react-toastify";

export const notify = () => toast.success("Registrácia bola úspešná");
export const errorRegister = () => toast.error("Registrácia nebola úspešná");