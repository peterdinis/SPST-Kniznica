import { toast } from "react-toastify";

export const notify = () => toast.success("Objednávka bola vytvorená");
export const errorRegister = () =>
  toast.error(
    "Objednávka nebola vytvorená. Skontroluje prosím údajte či sú správne"
  );