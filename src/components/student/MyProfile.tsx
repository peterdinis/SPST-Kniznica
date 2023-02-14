import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";
import AddIcon from '@mui/icons-material/Add';
import {useQuery} from "@tanstack/react-query"
import * as api from "../../api/queries/studentQueries"
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";

const MyProfile: React.FC = () => {
  const router = useRouter();

  const {data, isLoading, isError} = useQuery(["myProfile"], () => api.studentProfile);
  console.log(data);

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
  return (
    <>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">               
                <span>
                <AddIcon className="text-center" /> Nová fotka
                </span>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Moje požičané knihy
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
            <h1 className="text-4xl font-medium text-gray-700">
              {data.name},{" "}
            </h1>
            <p className="font-light text-gray-600 mt-3">{data.lastName}</p>

            <p className="mt-8 text-gray-500">
              {data.role}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
