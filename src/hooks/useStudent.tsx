import { IStudent } from "@/api/interfaces/IUser";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const useStudent = () => {
  const [student, setStudent] = useState<IStudent | null>(null);

  const currentUser = Cookies.get("currentUser");
  useEffect(() => {
    if (currentUser) {
      setStudent(JSON.parse(currentUser));
    }
  }, [currentUser]);

  return {
    currentUser,
    student
  }
};
