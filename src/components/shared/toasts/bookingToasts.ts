import { toast } from "react-toastify";

export const notify = () => toast.success("Kniha bola vratená");
export const errorRegister = () => toast.error("Kniha nebola vratená");

export const bookingSuccess = () =>toast.success("Objednávka bola vytvorená");
export const bookingErrror = () => toast.error("Objednávka nebola vytvorená");