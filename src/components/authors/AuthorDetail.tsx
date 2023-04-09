import Header from "../shared/Header";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/errors/ErrorRender";
import FallbackLoader from "../shared/FallbackLoader";
import * as api from "../../api/queries/authorQueries";
import { placeholderAuthor } from "@/data/placeholderAuthor";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AuthorDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["authorDetail", Number(id)],
    () => api.getOneAuthor(id as unknown as string),{
        retry: 2,
        placeholderData: placeholderAuthor
    }
  );
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  const navigateToAuthors = () => {
    router.push("/authors");
  }

  console.log(data);

  return (
    <>
      <Header name="Detail o spisovateľovi" />
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {(data.book && data.book.image === null) ||
            (data.book && data.book.image === undefined) ||
            (data.book && data.book.image === "string") ? (
              <LazyLoadImage
                alt="No Image"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              />
            ) : (
              <LazyLoadImage
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src={data.book && data.book.image}
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div>
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                  <span className="font-bold">Názov</span>:{" "}
                  {data.book && data.book.name}
                </h1>
              </div>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Krátke info</span>:{" "}
                {data.book && data.book.description}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Author</span>:{" "}
                {data.author && data.author.name}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Rok</span>:{" "}
                {data.book && data.book.year}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Počet Strán</span>:{" "}
                {data.book && data.book.pages}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Počet Kusov</span>:{" "}
                {data.book && data.book.quantity}
              </p>

              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Kategória</span>:{" "}
                {data.category && data.category.name}
              </p>

              {data.book && data.book.status !== "Dostupná" && (
                <div>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-red-800">Nedostupná</span>
                    <br />
                  </p>
                </div>
              )}

              <hr className="mt-6" />
              <button
                onClick={navigateToAuthors}
                className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold"
              >
                Návrat na knihy
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorDetail;
