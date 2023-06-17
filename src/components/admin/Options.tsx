import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";

const Options: React.FC = () => {
  return (
    <>
      <div className="mt-10 w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <SettingsIcon />
            <span className="tracking-wide">Moje možnosti</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Zobraziť všetky knihy
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/books/all">Všetky knihy</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Zobraziť všetkých autorov
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/authors/all">Všetci Spistovatelia</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Zobraziť všetky kategórie
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/categories/all">Všetky kategórie</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Zobraziť všetky objednávky
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/booking/all">Všetky objednávky</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Pridať novú knihu</div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/books/create">Nová kniha</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Pridanie novej kategórie
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/category/create">Nová kategória</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Zoznam všetkých žiakov
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/students/all">Zoznam žiakov</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Zoznam všetkých učiteľov
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/teachers/all">Zoznam učiteľov</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">
                  Návrat na edupage
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="https://spsbj.edupage.org/">Edupage</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
