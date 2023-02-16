import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/studentQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";
import { PhotoUploadModal } from "./PhotoUploadModal";
import Link from "next/link";
import { placeholderStudent } from "@/data/placeholderStudent";
import ProtectedRoute from "@/routes/student/ProtectedRoute";

const MyProfile: React.FC = () => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery(
    ["myProfile"],
    () => api.studentProfile, {
      placeholderData: placeholderStudent
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  const logoutToast = () => toast.success("Odhlásenie bolo úspešné");

  const logoutStudent = () => {
    localStorage.clear();
    logoutToast();
    router.push("/student/login");
  };

  const existingStudentId = localStorage.getItem("studentId");

  return (
    <ProtectedRoute>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <span>
                  <PhotoUploadModal btnName={"Nová fotka"}>
                    <div className="input_field flex flex-col w-max mx-auto text-center">
                      <label>
                        <svg
                          className="text-indigo-500 w-24 mx-auto mb-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <input
                          className="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          multiple
                        />
                        <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                          Vybrať súbor
                        </div>
                      </label>

                      <div className="mt-4 text-indigo-500 uppercase">
                        Alebo presunúť súbor sem
                      </div>
                    </div>
                  </PhotoUploadModal>
                </span>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                <Link href={`/booking/student/${existingStudentId}`}>
                  Moje požičané knihy
                </Link>
              </button>
              <button
                onClick={logoutStudent}
                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Odlhásenie
              </button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{data.name} </h1>
            <p className="font-light text-gray-600 mt-3">{data.lastName}</p>

            <p className="mt-8 text-gray-500">{data.role}</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default MyProfile;
