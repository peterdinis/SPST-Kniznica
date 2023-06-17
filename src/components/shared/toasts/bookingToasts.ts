import { toast } from "react-toastify";

export const notify = () => toast.success("Kniha bola vratená");
export const errorRegister = () => toast.error("Kniha nebola vratená");
