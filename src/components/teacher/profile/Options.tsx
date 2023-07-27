import { MdSettings } from 'react-icons/md';
import Link from "next/link";

const Options: React.FC = () => {
  return (
    <>
      <div className="mt-10 w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2  text-gray-900 leading-8">
            <MdSettings />
            <span className="tracking-wide">Moje možnosti</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Zobraziť všetky knihy
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/books/all">Všetky knihy</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Zobraziť všetky kategórie
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/categories/all">Všetky kategórie</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Zobraziť všetkých autorov
                </div>
                <div className="px-4 py-2">
                  <Link className="break-words text-red-500" href="/admin/authors/all">Všetci Autori</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Zobraziť všetky vypožičané knihy
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/booking/all">Všetky vypožičané knihy</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">Pridať novú knihu</div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/books/create">Nová kniha</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Pridanie novej kategórie
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/category/create">Nová kategória</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Pridanie nového autora
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/authors/create">Nový autor</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Zoznam všetkých žiakov
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/students/all">Zoznam žiakov</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
                  Zoznam všetkých učiteľov
                </div>
                <div className="px-4 py-2">
                  <Link className="text-red-500" href="/admin/teachers/all">Zoznam učiteľov</Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 ">
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
