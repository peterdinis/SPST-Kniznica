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
import { CustomTooltip } from "../shared/tooltip";
import { ApiModal } from "../shared/modals";
import { Input, Tag } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as mut from "@/api/mutations/authorMutations";
import { deleteAuthorSuccess } from "../shared/toasts/authorToasts";

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

  const { register, handleSubmit, setError, reset } = useForm();

  const updateAuthorSubmit = async() => {
     try {

     } catch(error)  {
      throw error;
     }
  }

  const deleteAuthorSubmit = async (id: number) => {
    try {
      await mut.deleteAuthor(id);
      deleteAuthorSuccess();
      reset();
      window.location.replace("/authors/all");
    } catch (error) {
      setError("id", {
        type: "manual",
        message: "An error occurred while deleting the author.",
      });
    }
  };

  return (
    <>
      <Header name="Detail o spisovateľovi" />
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {data.image === null ||
            data.image === undefined ||
            data.image === "string" ? (
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
                src={data.image}
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div>
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                  <span className="font-bold">Meno</span>: {data.name}
                </h1>
              </div>
              {(teacher || admin) && (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed mb-4 text-gray-800">
                    <span className="font-bold">Id autora/ky</span>: {data.id}
                  </p>
                </>
              )}
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Priezvisko</span>: {data.lastName}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Celé meno</span>: {data.fullName}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Dátum Narodenia</span>:{" "}
                {data.birthYear}
              </p>

              {data.deathYear === null || data.deathYear === undefined ? (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <CustomTooltip
                      label={
                        "Ak je autor/ka živý/á dátum úmrtia nie je uvedený"
                      }
                    >
                      <span className="font-bold text-green-800">
                        Author/ka je medzi živymi
                      </span>
                    </CustomTooltip>
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
                <ApiModal modalButtonText={"Prečítaj si informácie o autorovi alebo autorke"} modalHeaderText={"Krátke info o autorovi / autorke"} modalCloseText={"Zavrieť"}>
                <span className="break-words">{data.description}</span>
                </ApiModal>
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
                        Autor/ka nenapísal/a žiadne knihy <WarningIcon />
                      </dd>
                    </>
                  ) : (
                    <div>
                      {data.books.map((item: { name: string }) => {
                        return (
                          <Tag
                            key={item.name}
                            variant="solid"
                            colorScheme="teal"
                            mr={4}
                          >
                            {item.name}
                          </Tag>
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
                    <ApiModal
                      modalButtonText={"Uprav autora/ku"}
                      modalHeaderText={"Uprav autora/ku"}
                      modalCloseText={"Zatvor"}
                    >
                      CHILDREN
                    </ApiModal>
                  </button>
                  <button className="mr-4 float-right">
                    <ApiModal
                      modalButtonText={"Zmazať autora/ku"}
                      modalHeaderText={"Zmazať autora/ku"}
                      modalCloseText={"Zatvor"}
                    >
                      <form
                        onSubmit={handleSubmit((formData) =>
                          deleteAuthorSubmit(formData.id)
                        )}
                      >
                        <Input
                          {...register("id", {
                            valueAsNumber: true,
                            required: "Author ID is required",
                          })}
                          placeholder="Id Autora/ky"
                        />
                        <button
                          type="submit"
                          className="bg-red-800 text-white rounded-lg p-2 mt-5"
                        >
                          Zmaž autora/ku
                        </button>
                      </form>
                    </ApiModal>
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
