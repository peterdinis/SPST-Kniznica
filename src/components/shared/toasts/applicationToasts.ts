import {toast} from "react-toastify"

export const userAlreadyExistsToast = () => toast.error("Používateľ už existuje");
export const emailAlreadyExistsToast = () => toast.error("Email už existuje");
export const applicationErrorToast = () => toast.error("Nepodarilo sa vykonať request");
export const userDoesNotExists = () => toast.error("Používateľ neexistuje");
export const passwordErrors = () => toast.error("Heslá sa nezhodujú");