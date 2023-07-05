import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import useStudent from "@/hooks/useStudent";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useCopyToClipboard from "@/hooks/useCopy";
import { useMutation } from "@tanstack/react-query";
import ReturnModal from "@/components/shared/modals/ReturnModal";
import { logoutToast } from "@/components/shared/toasts/adminToasts";
import * as mut from "@/api/mutations/studentMutations";
import { IUpdateStudent } from "@/interfaces/IStudent";

const ProfileBody: React.FC = () => {
  const { student } = useStudent();
  const [value, copy] = useCopyToClipboard();

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("studentAccessToken", {
      path: "/",
    });
    Cookies.remove("studentData", {
      path: "/",
    });
    Cookies.remove("studentRegisterData", {
      path: "/",
    });
    Cookies.remove("studentPersonalData", {
      path: "/",
    });
    window.location.replace("/student/login");
  };

  const goToMyBooks = () => {
    window.location.replace(`/student/books/${student?.data.user.username}`);
  };

  const updateProfileMutation = useMutation((dataToUpdate: IUpdateStudent) =>
  mut.updateProfile(dataToUpdate, student?.data.user.username!)
);

const updateProfile = async (data: any) => {
  try {
    await updateProfileMutation.mutate(data);
    // Handle successful mutation
  } catch (error) {
    // Handle error
  }
};

  return (
    <div className="w-full md:w-9/12 mx-2 h-128">
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
              <div className="px-4 py-2">
                {student?.data.user.username}
                <ContentCopyIcon
                  onClick={() =>
                    copy(student?.data.user.username as unknown as string)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2 break-words">
                {student?.data.user.email}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Rola</div>
              <div className="px-4 py-2 text-red-700">
                {student?.data.user.role}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Moje požičané knihy</div>
              <div className="px-4 py-2">
                <button className="text-red-700" onClick={goToMyBooks}>Moje knihy</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Odhlásiť sa</div>
              <div className="px-4 py-2">
                <button onClick={logoutFromApp} className="text-red-700">
                  Odlhásenie
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Upraviť profil</div>
              <div className="px-4 py-2">
                <button>
                  <ReturnModal
                    btnName={"Upraviť profil"}
                    modalHeader={"Upraviť profil"}
                  >
                    <form className="mt-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2">
                        Meno
                      </label>
                      <input
                        type="text"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={student?.data.user.name}
                      />
                      <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                        Priezivsko
                      </label>
                      <input
                        type="text"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={student?.data.user.lastName}
                      />
                      <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                        Používateľské meno
                      </label>
                      <input
                        type="text"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={student?.data.user.username}
                      />
                      <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={student?.data.user.email}
                      />
                      <button className="ml-8 mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
                        Upraviť profil
                      </button>
                    </form>
                  </ReturnModal>
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
