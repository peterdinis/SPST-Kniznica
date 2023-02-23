import { IStudent } from "@/api/interfaces/IUser";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const useStudent = () => {
  const [student, setStudent] = useState<IStudent | null>(null);

  const currentStudent = Cookies.get("currentStudent");
  useEffect(() => {
    if (currentStudent) {
      setStudent(JSON.parse(currentStudent));
    }
  }, [currentStudent]);

  return {
    currentStudent,
    student
  }
};
