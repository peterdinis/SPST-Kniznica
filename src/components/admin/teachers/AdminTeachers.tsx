import Header from "@/components/shared/Header";
import * as api from "../../../api/queries/teacherQueries";
import { useQuery } from "@tanstack/react-query";
import { placeholderTeacher } from "@/data/placeholerTeacher";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/FallbackRender";
import { getTeachersError } from "@/components/shared/errors/constants/errorMessages";
import { TeacherBasicInfo } from "@/interfaces/ITeacher";
import ScrollToTop from "@/hooks/useScroll";

const AdminTeachers: React.FC = () => {
  const {data, isLoading, isError} = useQuery(["allTeachers"], api.getAllTeachers, {
    initialData: placeholderTeacher
  })

  if(isLoading) {
    return <FallbackLoader />
  }

  if(isError) {
    return <FallbackRender error={getTeachersError} />
  }

  return (
    <>
      <Header name="Všetci učiteľia" />
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
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data &&
                    data.map((item: TeacherBasicInfo) => {
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

export default AdminTeachers;
