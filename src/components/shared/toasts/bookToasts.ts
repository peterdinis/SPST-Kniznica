import { toast } from "react-toastify";

export const notify = () => toast.success("Objednávka bola vytvorená");
export const errorRegister = () =>
  toast.error(
    "Objednávka nebola vytvorená. Skontroluje prosím údajte či sú správne"
  );

export const allFieldsBooksError = () => toast.error("Všetky veci musia byť vyplnené pri tvorbe knihy");

export const createNotify = () => toast.success("Kniha bola vytvorená");
export const createErrorRegister = () => toast.error("Kniha nebola vytvorená");

export const updateBookSuccess = () => toast.success("Kniha bola upravená");
export const updateBookError = () => toast.error("Kniha nebola upravená");

export const deleteBookError = () => toast.error("Kniha nebola vytvorená");
export const deleteBookSuccess = () => toast.success("Kniha bola vytvorená");