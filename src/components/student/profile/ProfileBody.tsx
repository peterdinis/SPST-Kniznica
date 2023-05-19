import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie"
import useStudent from "@/hooks/useStudent";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useCopyToClipboard from "@/hooks/useCopy";
import Link from "next/link";

const ProfileBody: React.FC = () => {
  const logoutToast = () => toast.success("Odhlásenie bolo úspešné");
  const { student } = useStudent();
  const [value, copy] = useCopyToClipboard();

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("studentAccessToken", {
      path: "/"
    });
    Cookies.remove("studentData", {
      path: "/"
    });
    Cookies.remove("studentRegisterData", {
      path: "/"
    });
    Cookies.remove("studentPersonalData", {
      path: "/"
    });
    window.location.replace("/student/login");
  };

  const goToMyBooks = () => {
    setTimeout(() => {
      window.location.replace(`/student/books/${student?.data.user.username}`)
    }, 500);
  }

  return (
    <div className="w-full md:w-9/12 mx-2 h-64">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <PersonIcon />
          <span className="tracking-wide">Základné informácie</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2  font-semibold">Meno</div>
              <div className="px-4 py-2">{student?.data.user.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Priezvisko</div>
              <div className="px-4 py-2">{student?.data.user.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Používateľské meno</div>
              <div className="px-4 py-2">{student?.data.user.username}<ContentCopyIcon onClick={() => copy(student?.data.user.username as any)} /></div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2 break-words">{student?.data.user.email}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Rola</div>
              <div className="px-4 py-2">{student?.data.user.role}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Moje požičané knihy</div>
              <div className="px-4 py-2">
                <button
                  onClick={goToMyBooks}
                >
                  Moje knihy
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Odhlásiť sa</div>
              <div className="px-4 py-2">
                <button
                  onClick={logoutFromApp}
                  className="text-red-500"
                >
                  Odlhásenie
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Nastaviť nové heslo</div>
              <div className="px-4 py-2">
                <button
                >
                  <Link href="/student/new-password">
                    Nové heslo
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
