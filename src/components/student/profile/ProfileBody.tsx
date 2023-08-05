import useStudent from "@/hooks/useStudent";
import useCopyToClipboard from "@/hooks/useCopy";
import { Icon } from "@chakra-ui/react";
import { HiUser, HiClipboardCopy } from "react-icons/hi";

const ProfileBody: React.FC = () => {
  const { student } = useStudent();
  const [value, copy] = useCopyToClipboard();

  const goToMyBooks = () => {
    window.location.replace(`/student/books/${student?.data.user.username}`);
  };

  return (
    <div className="w-full md:w-9/12 mx-2 h-128">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2  text-gray-900 leading-8">
          <Icon as={HiUser} boxSize={6} />
          <span className="tracking-wide">Základné informácie</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2  ">Meno</div>
              <div className="px-4 py-2">{student?.data.user.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Priezvisko</div>
              <div className="px-4 py-2">{student?.data.user.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Používateľské meno</div>
              <div className="px-4 py-2">
                {student?.data.user.username}
                <Icon
                  as={HiClipboardCopy}
                  boxSize={6}
                  onClick={() =>
                    copy(student?.data.user.username as unknown as string)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Email</div>
              <div className="px-4 py-2 break-words">
                {student?.data.user.email}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Rola</div>
              <div className="px-4 py-2 text-red-500">
                {student?.data.user.role}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Moje požičané knihy</div>
              <div className="px-4 py-2">
                <button className="text-red-500" onClick={goToMyBooks}>
                  Moje knihy
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
