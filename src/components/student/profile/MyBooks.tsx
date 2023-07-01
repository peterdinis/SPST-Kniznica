import * as api from "@/api/queries/bookingQueries";
import { useQuery } from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/FallbackRender";
import { useRouter } from "next/router";
import { IBooking } from "@/interfaces/IBooking";
import ReturnBookModal from "./ReturnBookModal";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { loadBorrowedBooksError } from "@/components/shared/errors/constants/errorMessages";

const MyBooks: React.FC = () => {
  const { query, isReady } = useRouter();
  if (!isReady) {
    return <FallbackLoader />;
  }
  const { data, isLoading, isError } = useQuery(
    ["myBorrowedBooks", query.username as unknown as string],
    () => api.getMyBorrowedBooks(query.username![0] as unknown as string)
  );

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error={loadBorrowedBooksError} />;
  }

  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Id knihy</th>
                <th className="px-4 py-3">Požičaná od</th>
                <th className="px-4 py-3">Požičaná do</th>
                <th className="px-4 py-3">Vrátiť knihu</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data === null || data === undefined && <div className="flex justify-center aling-top text-black text-xl">Nemáte žiadne požičané knihy <SentimentVeryDissatisfiedIcon /></div>}
              {data &&
                data.map((item: IBooking) => {
                  return (
                    <>
                      <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold text-black">{item.bookId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          {item.from}
                        </td>
                        <td className="px-4 py-3 border">
                          <span className="px-4 py-3 text-ms font-semibold">
                            {" "}
                            {item.to}
                          </span>
                        </td>
                        <td className="text-sm border">
                          <ReturnBookModal />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBooks;
