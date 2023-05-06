import { ILoginStudentInfo } from "@/interfaces/IStudent";
import Dayjs from "dayjs";

export const placeholderStudent = [{
    name: "Name",
    createdAt: Dayjs().format(new Date().toISOString()),
    classRoom: "1.A",
    email: "pdinis1@gmail.com",
    lastName: "Last Name",
    password: "ROROROROROPTPT/R/R/",
    role: "STUDENT",
    updatedAt: Dayjs().format(new Date().toISOString()),
    username: "ITITITITITITIT"

}] as ILoginStudentInfo[] | any;