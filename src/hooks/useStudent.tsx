import { ILoginStudentInfo } from "@/interfaces/IStudent";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const useStudent = () => {
    const [student, setStudent] = useState<ILoginStudentInfo | null>(null);

    useEffect(() => {
        const currentStudent = Cookies.get("studentData");
        if (currentStudent) {
            setStudent(JSON.parse(currentStudent));
        }
    }, []);

    return {
        student,
    }
}

export default useStudent;