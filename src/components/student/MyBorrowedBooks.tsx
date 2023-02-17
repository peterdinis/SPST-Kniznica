import * as api from "../../api/queries/studentQueries";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { useRouter } from "next/router";
import { placeholderBooking } from "@/data/placeholderBooking";
import Header from "../shared/Header";

const MyStudentBorrowedBooks: React.FC = () => {
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
      <section className="container mx-auto p-8 mt-4">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-white">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Názov knihy</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Dátum od</th>
                  <th className="px-4 py-3">Dátum do</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyStudentBorrowedBooks;
