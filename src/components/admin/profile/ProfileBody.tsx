import { ChatIcon, CopyIcon } from '@chakra-ui/icons';
import useCopyToClipboard from "@/hooks/useCopy";
import useAdmin from "@/hooks/useAdmin";
import { Options } from "..";

const ProfileBody: React.FC = () => {
  const { admin } = useAdmin();
  const [value, copy] = useCopyToClipboard();

  const goToMyBooks = () => {
    window.location.replace(`/admin/mybooks/${admin?.data.admin.username}`);
  };

  return (
    <div className="w-full md:w-9/12 mx-2 h-64">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2  text-gray-900 leading-8">
          <ChatIcon />
          <span className="tracking-wide">Základné informácie</span>
        </div>

        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2  ">Meno</div>
              <div className="px-4 py-2">{admin?.data.admin.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Priezvisko</div>
              <div className="px-4 py-2">{admin?.data.admin.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Používateľské meno</div>
              <div className="px-4 py-2">
                {admin?.data.admin.username}
                <CopyIcon
                  onClick={() =>
                    copy(admin?.data.admin.username as unknown as string)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Email</div>
              <div className="px-4 py-2 break-words">
                {admin?.data.admin.email}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Rola</div>
              <div className="px-4 py-2 text-red-500">
                {admin?.data.admin.role}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Moje požičané knihy</div>
              <div className="px-4 py-2 text-red-500">
                <button onClick={goToMyBooks}>Moje knihy</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2  ">
                Obnovenie účtu študent
              </div>
              <div className="px-4 py-2 text-red-500 ">
                <button onClick={goToMyBooks}>Obnov účet študent</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">
                Obnovenie účtu učiteľ
              </div>
              <div className="px-4 py-2 text-red-500 ">
                <button onClick={goToMyBooks}>Obnov účet učiteľovi</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">
                Deaktivácia učtu učiteľ
              </div>
              <div className="px-4 py-2 text-red-500">
                <button onClick={goToMyBooks}>Deaktivuj učet učiteľovi</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2  ">
                Deaktivácia učtu žiak
              </div>
              <div className="px-4 py-2 text-red-500 ">
                <button onClick={goToMyBooks}>Deaktivuj učet žiakovi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Options />
    </div>
  );
};

export default ProfileBody;
