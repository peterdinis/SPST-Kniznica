import * as api from "../../api/queries/studentQueries";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { useRouter } from "next/router";
import { placeholderBooking } from "@/data/placeholderBooking";
import Header from "../shared/Header";
import { useState } from "react";

const MyStudentBorrowedBooks: React.FC = () => {
  const [show, setShow] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["myBorrowedBooks", id],
    () => api.getMyBorrowedBooks(id as any),
    {
      retry: 1,
      placeholderData: placeholderBooking,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  console.log(data);

  return (
    <>
      <Header name="Moje požičané knihy" />
      <div className="w-full sm:px-6">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Číslo objednávky</th>
                <th className="font-normal text-left pl-12">Názov knihy</th>
                <th className="font-normal text-left pl-12">Požičaná od</th>
                <th className="font-normal text-left pl-20">Do</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">
                        UX Design &amp; Visual Strategy
                      </p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Herman Group
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    72%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-20 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyStudentBorrowedBooks;
