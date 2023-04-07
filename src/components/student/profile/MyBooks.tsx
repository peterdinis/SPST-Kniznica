import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import { ILoginStudentInfo } from "@/interfaces/IStudent";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../../api/queries/studentQueries";
import FallbackRender from "@/components/shared/ErrorRender";
import FallbackLoader from "@/components/shared/FallbackLoader";

const MyBooks: React.FC = () => {
  const [user, setUser] = useState<ILoginStudentInfo | null>(null);

  useEffect(() => {
    const currentUser = Cookies.get("studentData");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);
  const studentUsername = user!.data.user.username;

  const { data, isError, isLoading } = useQuery(
    ["studentBorrowedBooks", studentUsername],
    () => api.getMyBorrowedBooks(studentUsername as unknown as string)
  );

  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  return (
    <>
      <div className="mt-10 w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <PersonIcon />
            <span className="tracking-wide">Moje požičané knihy</span>
          </div>
          <div className="py-3 text-sm">
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
              <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
              <div className="flex-grow font-medium px-2">Tighten Co.</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Team
              </div>
            </div>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
              <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
              <div className="flex-grow font-medium px-2">Taylor Otwell</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Member
              </div>
            </div>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
              <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
              <div className="flex-grow font-medium px-2">Adam Wathan</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Member
              </div>
            </div>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
              <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
              <div className="flex-grow font-medium px-2">
                Duke Street Studio Inc.
              </div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Team
              </div>
            </div>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
              <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
              <div className="flex-grow font-medium px-2">Jeffrey Wey</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Member
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooks;
