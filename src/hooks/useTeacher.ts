import {
  ILoginTeacherInfo,
  ILoginTeacherPersonalInfo,
} from "@/interfaces/ITeacher";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const useTeacher = () => {
  const [teacher, setTeacher] = useState<ILoginTeacherInfo | null>(null);
  const [teacherPersonalInfo, setTeacherPersonalInfo] =
    useState<ILoginTeacherPersonalInfo | null>(null);

  useEffect(() => {
    const currentTeacher = Cookies.get("teacherData");
    const currentTeacherPersonalInfo = Cookies.get("teacherPersonalInfo");
    if (currentTeacher) {
      setTeacher(JSON.parse(currentTeacher));
    }

    if (currentTeacherPersonalInfo) {
      setTeacherPersonalInfo(JSON.parse(currentTeacherPersonalInfo));
    }
  }, []);

  return {
    teacher,
    teacherPersonalInfo
  };
};

export default useTeacher;
