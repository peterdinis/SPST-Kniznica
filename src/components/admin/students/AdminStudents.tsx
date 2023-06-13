import Header from "@/components/shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../../api/queries/studentQueries";
import { placeholderStudent } from "@/data/placeholderStudent";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/FallbackRender";
import { getStudentsError } from "@/components/shared/errors/constants/errorMessages";
import {  StudentBasicInfo } from "@/interfaces/IStudent";
import ScrollToTop from "@/hooks/useScroll";

const AdminStudents: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    ["allStudents"],
    api.getAllStudents,
    {
      placeholderData: placeholderStudent,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error={getStudentsError} />;
  }

  return (
    <>
      <Header name="Všetci žiaci" />
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screenflex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto ml-10">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Meno</th>
                    <th className="py-3 px-6 text-left">Používateľské meno</th>
                    <th className="py-3 px-6 text-center">Dátum vytvorenia účtu</th>
                    <th className="py-3 px-6 text-center">Trieda</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data &&
                    data.map((item: StudentBasicInfo) => {
                      return (
                        <>
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="font-medium">
                                  {item.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                              <div className="flex items-center">
                                <span>{item.username}</span>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                              <div className="flex items-center justify-center">
                               {item.createdAt}
                              </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                              <span className="py-1 px-3 rounded-full text-xs">
                                {item.classRoom}
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default AdminStudents;
