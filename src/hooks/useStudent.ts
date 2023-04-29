import {
  ILoginStudentInfo,
  ILoginStudentPersonalInfo,
} from "@/interfaces/IStudent";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const useStudent = () => {
  const [student, setStudent] = useState<ILoginStudentInfo | null>(null);
  const [studentPersonalInfo, setStudentPersonalInfo] =
    useState<ILoginStudentPersonalInfo | null>(null);
    
  useEffect(() => {
    const currentStudent = Cookies.get("studentData");
    const currentStudentPersonalInfo = Cookies.get("studentPersonalData");
    if (currentStudent) {
      setStudent(JSON.parse(currentStudent));
    }

    if (currentStudentPersonalInfo) {
      setStudentPersonalInfo(JSON.parse(currentStudentPersonalInfo));
    }
  }, []);

  return {
    student,
    studentPersonalInfo,
  };
};

export default useStudent;
