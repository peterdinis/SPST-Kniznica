import { ILoginAdminInfo } from "@/interfaces/IAdmin";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState<ILoginAdminInfo | null>(null);

  useEffect(() => {
    const currentAdmin = Cookies.get("adminData") as unknown as string;
    if (currentAdmin) {
      setAdmin(JSON.parse(currentAdmin));
    }
  }, []);

  return {
    admin,
  };
};

export default useAdmin;
