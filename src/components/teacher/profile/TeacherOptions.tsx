import SettingsIcon from "@mui/icons-material/Settings";
import CreateIcon from "@mui/icons-material/Create";
import ListIcon from "@mui/icons-material/List";

const TeacherOptions: React.FC = () => {
  return (
    <>
      <div className="pt-6 w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <SettingsIcon />
            <span className="tracking-wide">Moje možnosti</span>
          </div>
          <div className="mt-2 p-2">
            
           <li>
              <a className="text-red-800 ml-4" href="/admin/books/all">
                <ListIcon /> Zobraz všetky knihy
              </a>
            </li>
            <li>
              <a className="text-red-800 ml-4" href="/admin/categories/all">
                <ListIcon /> Zobraz všetky kategórie
              </a>
            </li>
            <li>
              <a className="text-red-800 ml-4" href="/books/create">
                <CreateIcon /> Vytvor knihu
              </a>
            </li>
            <li>
              <a className="ml-4 text-red-800" href="/category/create">
                <CreateIcon /> Vytvor kategóriu
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherOptions;
