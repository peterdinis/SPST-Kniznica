import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/studentMutation";
import {toast} from "react-toastify"
import { useRouter } from "next/dist/client/router";

const MyProfile: React.FC = () => {
  const router = useRouter();
  /* if(typeof window !== "undefined") {
  localStorage.setItem('myCat', 'Tom');
} */

  /* const studentProfileInfo = axios.get("http://localhost:8111/student/profile", {
  headers: {
      "Authorization": "bearer" + localStorage.getItem("studentAccessToken")
  },
  withCredentials: true
}) */

  /* const {data, isLoading, isError} = useQuery(["studentProfile"], () => studentProfileInfo);

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  console.log(data); */

  const logoutToast = () => toast.success("Odhlásenie bolo úspešné");

  const logoutStudent = () => {
    localStorage.clear();
    logoutToast();
    router.push("/student/login");
  }

  return (
    <>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Moje požičané knihy
              </button>
              <button onClick={logoutStudent} className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Odlhásenie
              </button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              Jessica Jones,{" "}
              <span className="font-light text-gray-500">27</span>
            </h1>
            <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>

            <p className="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p className="mt-2 text-gray-500">University of Computer Science</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
