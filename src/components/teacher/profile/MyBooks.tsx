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

  const { data, isError, isLoading } = useQuery(
    ["teacherBorrowedBooks", teacherUsername],
    () => api.getMyNotifications(teacherUsername as unknown as string),
    {
      initialData: placeholderBooking,
      retry: 2,
    }
  );

  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  return (
    <>
      <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <MenuBookIcon />
            <span className="tracking-wide">Moje požičané knihy</span>
          </div>
          {data === null ||
            data === undefined ||
            (!data && (
              <div className="font-bold text-lg">
                Učiteľ nemá požičané žiadne knihy{" "}
                <SentimentVeryDissatisfiedIcon />
              </div>
            ))}
          {data &&
            data.map((item: IBooking) => {
              return (
                <>
                  <div className="py-3 text-sm">
                    <div className="flex justify-start cursor-pointer text-gray-700 rounded-md px-2 py-2 my-2">
                      <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                      <div className="flex-grow font-medium px-2">
                        <Link href={`/books/detail/${item.bookId}`}>
                          Detail Knihy - {item.bookId}
                        </Link>
                      </div>
                      <div className="text-sm font-normal text-gray-500 tracking-wide">
                        {item.from}
                      </div>
                      <div className="text-sm ml-10 font-normal text-gray-500 tracking-wide">
                        {item.to}
                      </div>
                      <ReturnBookModal />
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MyBooks;
