import Header from "@/components/shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/bookQueries";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/ErrorRender";
import { IBook } from "@/interfaces/IBook";
import { placeholderBook } from "@/data/placeholderBook";
import ScrollToTop from "@/hooks/useScroll";

const AdminBooks: React.FC = () => {
  const { data, isLoading, isError } = useQuery(["adminBooks"], api.getBooks, {
    initialData: placeholderBook
  });

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }
  return (
    <>
      <Header name="Všetky Knihy" />
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screenflex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto ml-10">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Meno knihy</th>
                    <th className="py-3 px-6 text-center">Popis knihy</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Možnosti</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    {data &&
                      data.map((item: IBook) => {
                        return (
                          <>
                            <td className="py-3 px-6 text-left">
                              <div className="flex items-center">
                                <span>{item.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                              <span>{item.description}</span>
                            </td>
                            <td className="py-3 px-6 text-center">
                              <span className="py-1 px-3 rounded-full text-xs">
                                {item.available === false && <span className="text-red-500 font-bold">Nedostupná</span>}
                                {item.available === true && <span className="text-green-500 font-bold">Dostupná</span>}
                              </span>
                            </td>
                            <td className="py-3 px-6 text-center">
                              <div className="flex item-center justify-center">
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>
                                </div>
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </td>
                          </>
                        );
                      })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default AdminBooks;
