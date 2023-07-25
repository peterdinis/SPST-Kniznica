import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/authorQueries";
import { placeholderAuthor } from "@/data/placeholderAuthor";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
import defaultImage from "../../images/noImage.png";
import { getAuthorDetailError } from "../../constants/errorMessages";
import { WarningIcon } from "@chakra-ui/icons";
import { FallbackLoader, Header, FallbackRender } from "../shared";
import useTeacher from "@/hooks/useTeacher";
import useAdmin from "@/hooks/useAdmin";

const AuthorDetail: React.FC = () => {
  const { query, isReady } = useRouter();

  if (!isReady) {
    return <FallbackLoader />;
  }
  const router = useRouter();
  const { teacher } = useTeacher();
  const { admin } = useAdmin();

  const { data, isError, isLoading } = useQuery(
    ["authorDetail", query.id as unknown as number],
    () => api.getOneAuthor(query.id as unknown as string),
    {
      retry: 2,
      placeholderData: placeholderAuthor,
    }
  );

  if (isError) {
    return <FallbackRender error={getAuthorDetailError} />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  const navigateToAuthors = () => {
    router.push("/authors/all");
  };

  return (
    <>
      <Header name="Detail o spisovateľovi" />
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {data.picture === null ||
              data.picture === undefined ||
              data.picture === "string" ? (
              <Image
                alt="No Image"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src={defaultImage}
                height={300}
                width={300}
                priority={true}
              />
            ) : (
              <LazyLoadImage
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src={data.picture}
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div>
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                  <span className="font-bold">Meno</span>: {data.name}
                </h1>
              </div>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Priezvisko</span>: {data.lastName}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Dátum Narodenia</span>:{" "}
                {data.birthYear}
              </p>

              {data.deathYear === null || data.deathYear === undefined ? (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold text-green-800">
                      Author/ka je medzi živymi
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold text-red-800">Dátum Umrtia</span>
                    : {data.deathYear}
                  </p>
                </>
              )}
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Krajina</span>: {data.country}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Krátke info o autorovi/ke</span>:{" "}
                <span className="break-words">{data.description}</span>
              </p>

              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Literárne obdobie</span>:{" "}
                {data.litPeriod}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">
                  Author/ka napísal/a tieto knihy
                </span>
                :{" "}
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {!data.books || data.books.length === 0 ? (
                    <>
                      <dd className="mt-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        Autor/ka nenapísal/a žiadne knihy{" "}
                        <WarningIcon/>
                      </dd>
                    </>
                  ) : (
                    <div>
                      {data.books.map((item: { name: string }) => {
                        return (
                          <div
                            key={item.name}
                            className="mt-1 pt-2 text-lg text-gray-900 sm:col-span-2 sm:mt-0"
                          >
                            {item.name} {""}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </dd>
              </p>
              <hr className="mt-6" />
              <button
                onClick={navigateToAuthors}
                className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold"
              >
                Návrat na spisovateľov
              </button>
              <br />
              {(teacher || admin) && (
                <>
                  <button className="float-right">
                    Uprav kategóriu
                  </button>
                  <button className="mr-4 float-right">
                    Zmaž kategóriu
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorDetail;
