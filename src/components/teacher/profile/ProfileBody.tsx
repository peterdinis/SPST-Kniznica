import { useRouter } from "next/router";
import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import MyBooks from "./MyBooks";
import TeacherOptions from "./TeacherOptions";
import useTeacher from "@/hooks/useTeacher";

const ProfileBody: React.FC = () => {
  const router = useRouter();
  const logoutToast = () => toast.success("Odhlásenie bolo úspešné");
  const {teacher} = useTeacher();

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("teacherAccessToken");
    Cookies.remove("teacherData");
    Cookies.remove("teacherRegisterData");
    router.push("/teacher/login");
  };

  return (
    <>
      <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <PersonIcon />
            <span className="tracking-wide">Základné informácie</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Meno</div>
                <div className="px-4 py-2">{teacher?.data.user.name}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Priezvisko</div>
                <div className="px-4 py-2">{teacher?.data.user.lastName}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Používateľské meno
                </div>
                <div className="px-4 py-2">{teacher?.data.user.username}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2">{teacher?.data.user.email}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Rola</div>
                <div className="px-4 py-2">{teacher?.data.user.role}</div>
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
        <MyBooks />
        <TeacherOptions />
      </div>
    </>
  );
};

export default ProfileBody;
