import { toast } from "react-toastify";

export const notify = () => toast.success("Nový spisovateľ bol vytvorený");
export const errorRegister = () => toast.error("Kategória nebola vytvorená");
