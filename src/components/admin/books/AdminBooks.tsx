import Header from "@/components/shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/bookQueries";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/ErrorRender";
import { IBook } from "@/interfaces/IBook";
import Link from "next/link";
import ScrollToTop from "@/hooks/useScroll";
import { getAllBooksError } from "@/components/shared/errors/errorMessages";
import { IPaginatedBooks } from "@/data/placeholderPaginatedBooks";
import { useState } from "react";
import ReturnModal from "@/components/shared/modals/ReturnModal";
import ReturnBookModal from "../ReturnBookModal";

const AdminBooks: React.FC = () => {
  const [page] = useState(0);
  const [limit] = useState(12);

  let initialBooks: IPaginatedBooks | any;
  const { data, isError, isLoading } = useQuery(
    ["paginateBooks", page],
    () => api.paginateBooks(page, limit),
    {
      keepPreviousData: true,
      initialData: initialBooks,
      retry: 2,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error={getAllBooksError} />;
  }

  return (
    <>
      <Header name="Všetky Knihy" />
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Id knihy</th>
                  <th className="px-4 py-3">Názov knihy</th>
                  <th className="px-4 py-3">Vyddavateľstvo</th>
                  <th className="px-4 py-3">Rok Vydania</th>
                  <th className="px-4 py-3">Detail</th>
                  <th className="px-4 py-3">Uprav knihu</th>
                  <th className="px-4 py-3">Zmaž knihu</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.data.result &&
                  data.data.result.map((item: IBook) => {
                    return (
                      <>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold text-black">
                                  {item.id}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            {item.name}
                          </td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-bold  text-red-700 bg-red-100 rounded-sm">
                              {" "}
                              {item.publisher}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold  text-red-700 bg-red-100 rounded-sm">
                              {" "}
                              {item.year}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold   rounded-sm">
                              {" "}
                              <Link href={`/book/${item.externalId}`}>
                                Detail
                              </Link>
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold   rounded-sm">
                              {" "}
                              <ReturnModal
                                btnName={"Upraviť knihu"}
                                modalHeader={"Upraviť knihu"}
                              >
                                fkfkf
                              </ReturnModal>
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold   rounded-sm">
                              <ReturnBookModal />
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <ScrollToTop />
      </section>
    </>
  );
};

export default AdminBooks;
