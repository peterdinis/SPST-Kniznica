import {toast} from "react-toastify";

export const passwordChangeSuccess = () => toast.success("Heslo bolo zmenené");
export const passwordChangeError = () => toast.error("Heslo nebolo zmenené");