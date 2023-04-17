import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../../api/queries/teacherQueries";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { placeholderBooking } from "@/data/placeholderBooking";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { ILoginTeacherInfo } from "@/interfaces/ITeacher";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/ErrorRender";
import { IBooking } from "@/interfaces/IBooking";
import ReturnBookModal from "./ReturnBookModal";

const MyBooks: React.FC = () => {
  const [teacher, setTeacher] = useState<ILoginTeacherInfo | null>(null);

  useEffect(() => {
    const currentTeacher = Cookies.get("teacherData");
    if (currentTeacher) {
      setTeacher(JSON.parse(currentTeacher));
    }
  }, []);

  const teacherUsername = teacher?.data.user.username;

  return (
    <>
      <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <MenuBookIcon />
            <span className="tracking-wide">Moje požičané knihy</span>
          </div>
          TEXT
        </div>
      </div>
    </>
  );
};

export default MyBooks;
