import { ITeacher } from "@/api/interfaces/ITeacher";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const useTeacher = () => {
  const [teacher, setTeacher] = useState<ITeacher | null>(null);

  const currentTeacher = Cookies.get("currentTeacher");
  useEffect(() => {
    if (currentTeacher) {
      setTeacher(JSON.parse(currentTeacher));
    }
  }, [currentTeacher]);

  return {
    currentTeacher,
    teacher,
  };
};
