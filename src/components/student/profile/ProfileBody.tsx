import { useQuery } from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/FallbackRender";
import { placeholderStudent } from "@/data/placeholderStudent";
import * as api from "../../../api/queries/studentQueries";
import * as upl from "../../../api/queries/uploadQueries";
import { useRouter } from "next/router";
import Link from "next/link";
import { logoutStudent } from "@/api/mutations/studentMutation";
import { toast } from "react-toastify";

const ProfileBody: React.FC = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery(
    ["studentProfile"],
    () => api.studentProfile,
    {
      placeholderData: placeholderStudent,
    }
  );

  const existingStudentId = localStorage.getItem("studentId");
  const logoutToast = () => toast.success("Odhlásenie bolo úspešné");

  const logoutFromApp = () => {
    logoutStudent();
    logoutToast();
    router.push("/student/login");
  };

  return (
    <>
      <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span className="text-green-500">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="tracking-wide">Základné informácie</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Meno</div>
                <div className="px-4 py-2">{data.name}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Priezvisko</div>
                <div className="px-4 py-2">{data.lastName}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2">{data.email}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Rola.</div>
                <div className="px-4 py-2">{data.role}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Trieda</div>
                <div className="px-4 py-2">{data.classRoom}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Moje knihy</div>
                <div className="px-4 py-2">
                  <Link href={`/booking/student/${existingStudentId}`}>
                    Moje požičané knihy
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Upraviť profil</div>
                <div className="px-4 py-2">
                  <Link href={`/student/profile/update`}>
                    Upraviť profil tu
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Zmena hesla</div>
                <div className="px-4 py-2">
                  {" "}
                  <Link href="/student/password/new">Zmeniť heslo</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Odhlásiť sa</div>
                <div className="px-4 py-2">
                  <button
                    onClick={logoutFromApp}
                    className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >
                    Odlhásenie
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBody;
