import { toast } from "react-toastify";

export const createNotify = () => toast.success("Kategória bola vytvorená");
export const createErrorRegister = () => toast.error("Nepodarilo sa vytvoriť novú kategóriu");
