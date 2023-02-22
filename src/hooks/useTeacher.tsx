import { ITeacher } from "@/api/interfaces/ITeacher";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const useTeacher = () => {
  const [teacher, setTeacher] = useState<ITeacher | null>(null);

  const currentUser = Cookies.get("currentTeacher");
  useEffect(() => {
    if (currentUser) {
      setTeacher(JSON.parse(currentUser));
    }
  }, [currentUser]);

  return {
    currentUser,
    teacher,
  };
};
