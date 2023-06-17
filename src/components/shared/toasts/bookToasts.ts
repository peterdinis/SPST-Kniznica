import { toast } from "react-toastify";

export const notify = () => toast.success("Objednávka bola vytvorená");
export const errorRegister = () =>
  toast.error(
    "Objednávka nebola vytvorená. Skontroluje prosím údajte či sú správne"
  );

export const createNotify = () => toast.success("Kniha bola vytvorená");
export const createErrorRegister = () => toast.error("Kniha nebola vytvorená");