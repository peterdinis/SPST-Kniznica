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
  const studentUsername = user?.data.user.username;

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

  console.log(data);
  
  return (
    <>
      <div className="mt-10 w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <PersonIcon />
            <span className="tracking-wide">Moje požičané knihy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooks;
