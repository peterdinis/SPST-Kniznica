import { toast } from "react-toastify";

export const notify = () => toast.success("Prihlásenie bolo úspešné");
export const errorRegister = () => toast.error("Prihlásenie nebolo úspešné");
  