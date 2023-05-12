import { ILoginTeacherInfo } from "@/interfaces/ITeacher";
import Dayjs from "dayjs";

export const placeholderTeacher = [{
    name: "NameT",
    lastName: "LastT",
    username: "teacher",
    email: "teacher@gmail.com",
    password: "RORP2/2/PITJTNGKP30291",
    role: "TEACHER",
    updatedAt: Dayjs().format(new Date().toISOString()),
    createdAt: Dayjs().format(new Date().toISOString())
    
}] as unknown as ILoginTeacherInfo[];