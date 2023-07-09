import PersonIcon from "@mui/icons-material/Person";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useCopyToClipboard from "@/hooks/useCopy";
import useAdmin from "@/hooks/useAdmin";
import Options from "../Options";

const ProfileBody: React.FC = () => {
  const { admin } = useAdmin();
  const [value, copy] = useCopyToClipboard();

  const goToMyBooks = () => {
    window.location.replace(`/admin/mybooks/${admin?.data.admin.username}`);
  };

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
              <div className="px-4 py-2">{admin?.data.admin.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Priezvisko</div>
              <div className="px-4 py-2">{admin?.data.admin.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Používateľské meno</div>
              <div className="px-4 py-2">
                {admin?.data.admin.username}
                <ContentCopyIcon
                  onClick={() =>
                    copy(admin?.data.admin.username as unknown as string)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2 break-words">
                {admin?.data.admin.email}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Rola</div>
              <div className="px-4 py-2 text-red-700">
                {admin?.data.admin.role}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Moje požičané knihy</div>
              <div className="px-4 py-2">
                <button onClick={goToMyBooks}>Moje knihy</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Obnovenie účtu študent
              </div>
              <div className="px-4 py-2">
                <button onClick={goToMyBooks}>Obnov účet študent</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Obnovenie účtu učiteľ
              </div>
              <div className="px-4 py-2">
                <button onClick={goToMyBooks}>Obnov účet učiteľ</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Deaktivácia učtu učiteľ
              </div>
              <div className="px-4 py-2">
                <button onClick={goToMyBooks}>Deaktivuj učet učiteľ</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Deaktivácia učtu žiak
              </div>
              <div className="px-4 py-2">
                <button onClick={goToMyBooks}>Deaktivuj učet žiak</button>
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
