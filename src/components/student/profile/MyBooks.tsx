import useStudent from "@/hooks/useStudent";
import * as api from "@/api/queries/bookingQueries";
import {useQuery} from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/ErrorRender";
import { useRouter } from "next/router";

const MyBooks: React.FC = () => {
  const { studentPersonalInfo } = useStudent();
  const router = useRouter();
  const {query, isReady} = useRouter();
  
  if(!isReady) {
    return <FallbackLoader />
  }

  console.log(query.username![0] as unknown as string);

  const {data, isLoading, isError} = useQuery(["myBorrowedBooks", query.username![0] as unknown as string], () => api.getMyBorrowedBooks(query.username![0] as unknown as string))

  if(isLoading) {
    return <FallbackLoader />
  }

  if(isError) {
    return <FallbackRender error={"Nastala Chyba"} />
  }
  
  return (
    <section className="container mx-auto p-6 font-mono">
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-gray-700">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Sufyan</p>
                    <p className="text-xs text-gray-600">Developer</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">22</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
              </td>
              <td className="px-4 py-3 text-sm border">6/4/2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  );
};

export default MyBooks;
