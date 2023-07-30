import useTeacher from "@/hooks/useTeacher";
import useCopyToClipboard from "@/hooks/useCopy";
import { ChatIcon, CopyIcon } from '@chakra-ui/icons'; 

import { Options } from "..";
import { SmallModal } from "@/components/shared/modals";

const ProfileBody: React.FC = () => {
  const { teacher } = useTeacher();
  const [value, copy] = useCopyToClipboard();

  const goToMyBooks = () => {
    window.location.replace(`/teacher/books/${teacher?.data.user.username}`);
  };

  return (
    <>
      <div className="w-full md:w-9/12 mx-2 h-128">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2  text-gray-900 leading-8">
            <ChatIcon />
            <span className="tracking-wide">Základné informácie</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">Meno</div>
                <div className="px-4 py-2">{teacher?.data.user.name}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">Priezvisko</div>
                <div className="px-4 py-2">{teacher?.data.user.lastName}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Používateľské meno
                </div>
                <div className="px-4 py-2">
                  {teacher?.data.user.username}
                  <CopyIcon
                    onClick={() =>
                      copy(teacher?.data.user.username as unknown as string)
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">Email</div>
                <div className="px-4 py-2 break-words">
                  {teacher?.data.user.email}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">Rola</div>
                <div className="px-4 py-2 text-red-500">
                  {teacher?.data.user.role}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Moje požičané knihy
                </div>
                <div className="px-4 py-2 text-red-500">
                  <button onClick={goToMyBooks}>Moje knihy</button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Deaktivovať účet
                </div>
                <div className="px-4 py-2 text-red-500">
                  <SmallModal modalButtonText={"Deaktivovať účet"} modalHeaderText={"Deaktivovať účet"} modalCloseText={"Zavrieť"}>
                    Children
                  </SmallModal>
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
