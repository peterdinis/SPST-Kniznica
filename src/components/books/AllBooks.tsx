import Header from "../shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/bookQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/FallbackRender";
import Link from "next/link";

const AllBooks: React.FC = () => {
  const { data, isError, isLoading } = useQuery(["allBooks"], api.getBooks);

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  console.log(data);

  return (
    <>
      <Header name="Všetky knihy" />
     <div className="grid gap-8 space-x-1 lg:grid-cols-6">
     {data &&
        data.map((item: any) => {
          return (
            <>
              <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src={item.image}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl text-gray-800">
                    {item.name} - {item.author}
                  </h3>
                  <div className="text-center mt-4">
                    <Link
                      className="link mt-10 bg-blue-200 p-2 rounded"
                      href={`/book/${item.id}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
     </div>
    </>
  );
};

export default AllBooks;
