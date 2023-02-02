import Header from "../shared/Header";
import * as api from "../../api/queries/bookQueries";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderBook } from "@/data/placeholderBook";

const BookInfo: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["categoryDetail", Number(id)],
    () => api.getOneBook(Number(id) as any), {
      placeholderData: placeholderBook
    }
  );

  if(isError) {
    return <FallbackRender error="Something went wrong" />
  }

  if(isLoading) {
    return <FallbackLoader />
  }

  const navigateToBooks = () => {
    router.push("/books");
  };
  return (
    <>
      <Header name="Detail Knihy" />
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {data.image === null ||
            data.image === undefined ||
            !data.image ||
            data.image === "string" ? (
              <img
                alt="No Image"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              />
            ) : (
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src={data.image}
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div>
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                  <span className="font-bold">Názov</span>: {data.name}
                </h1>
              </div>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Krátke info</span>:{" "}
                {data.description}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Author</span>: {data.author}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Rok</span>: {data.year}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookInfo;
