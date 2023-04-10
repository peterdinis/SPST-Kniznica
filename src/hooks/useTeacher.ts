import { ILoginTeacherInfo } from "@/interfaces/ITeacher";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const useTeacher = () => {
    const [teacher, setTeacher] = useState< ILoginTeacherInfo | null>(null);

    useEffect(() => {
        const currentTeacher = Cookies.get("teacherData");
        if (currentTeacher) {
            setTeacher(JSON.parse(currentTeacher));
        }
    }, []);

    return {
        teacher,
    }
}

export default useTeacher;