import Cookies from "js-cookie";
import {useState, useEffect} from "react";

const useAdmin = () => {
    // TODO: Remove any later
    const [admin, setAdmin] = useState<any | null>(null);

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