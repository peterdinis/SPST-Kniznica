import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import Options from "./Options";
import useTeacher from "@/hooks/useTeacher";
import Link from "next/link";
import useCopyToClipboard from "@/hooks/useCopy";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ProfileBody: React.FC = () => {
  const logoutToast = () => toast.success("Odhlásenie bolo úspešné");
  const { teacher } = useTeacher();
  const [value, copy] = useCopyToClipboard();

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("teacherAccessToken", {
      path: "/",
    });
    Cookies.remove("teacherData", {
      path: "/",
    });
    Cookies.remove("teacherPersonalInfo", {
      path: "/",
    });
    Cookies.remove("teacherRegisterData", {
      path: "/",
    });
    window.location.replace("/teacher/login");
  };

  const goToMyBooks = () => {
    setTimeout(() => {
      window.location.replace(`/teacher/books/${teacher?.data.user.username}`);
    }, 500);
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
                <div className="px-4 py-2">
                  {teacher?.data.user.username}
                  <ContentCopyIcon
                    onClick={() =>
                      copy(teacher?.data.user.username as unknown as string)
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2 break-words">
                  {teacher?.data.user.email}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Rola</div>
                <div className="px-4 py-2 text-red-500">
                  {teacher?.data.user.role}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Moje požičané knihy
                </div>
                <div className="px-4 py-2 text-red-700">
                  <button onClick={goToMyBooks}>Moje knihy</button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Odhlásiť sa</div>
                <div className="px-4 py-2">
                  <button onClick={logoutFromApp} className="text-red-500">
                    Odlhásenie
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Nastaviť nové heslo
                </div>
                <div className="px-4 py-2">
                  <button>
                    <Link className="text-red-700" href="/teacher/new-password">Nové heslo</Link>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Upraviť profil
                </div>
                <div className="px-4 py-2">
                  <button>
                    <Link href="/teacher/new-password">Nové heslo</Link>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Vymazať profil
                </div>
                <div className="px-4 py-2">
                  <button>
                    <Link href="/teacher/new-password">Zmazať profil</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Options />
      </div>
    </>
  );
};

export default ProfileBody;
