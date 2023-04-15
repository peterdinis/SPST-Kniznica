import { ILoginAdminInfo } from "@/interfaces/IAdmin";
import Cookies from "js-cookie";
import {useState, useEffect} from "react";

const useAdmin = () => {
    // TODO: Remove any later
    const [admin, setAdmin] = useState<ILoginAdminInfo | null>(null);

    useEffect(() => {
        const currentAdmin = Cookies.get("adminData");
        if (currentAdmin) {
            setAdmin(JSON.parse(currentAdmin));
        }
    }, []);

    return {
        admin,
    }
}

export default useAdmin;