import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import { ILoginStudentInfo } from "@/interfaces/IStudent";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../../api/queries/studentQueries";
import FallbackRender from "@/components/shared/ErrorRender";
import FallbackLoader from "@/components/shared/FallbackLoader";
import { IBooking } from "@/interfaces/IBooking";
import ReturnModal from "@/components/shared/ReturnModal";

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

  return (
    <>
      <div className="mt-10 w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <PersonIcon />
            <span className="tracking-wide">Moje požičané knihy</span>
          </div>
          {data &&
            data.map((item: IBooking) => {
              return (
                <>
                  <div className="py-3 text-sm">
                    <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                      <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                      <div className="flex-grow font-medium px-2">
                       {item.bookName}
                      </div>
                      <div className="text-sm font-normal text-gray-500 tracking-wide">
                        {item.from}
                      </div>
                      <div className="text-sm ml-10 font-normal text-gray-500 tracking-wide">
                        {item.to}
                      </div>
                      <div className="text-sm ml-10 font-normal text-gray-500 tracking-wide">
                        <ReturnModal btnName={"Vrátiť knihu"} modalHeader={"Vrátenie knihy"}>
                          I am children
                        </ReturnModal>
                      </div>
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
