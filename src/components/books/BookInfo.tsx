import Header from "../shared/Header";
import * as api from "../../api/queries/bookQueries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderBook } from "@/data/placeholderBook";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAuth } from "@/context/AuthProvider";
import HelperModal from "../shared/HelperModal";
import * as mut from "../../api/mutations/bookingMutations";
import { IBooking } from "@/interfaces/IBooking";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const BookInfo: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["bookDetail", Number(id)],
    () => api.getOneBook(Number(id) as any),
    {
      retry: 2,
      placeholderData: placeholderBook,
    }
  );

  if (isError) {
    return <FallbackRender error="Something went wrong" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  const navigateToBooks = () => {
    router.push("/books/all");
  };

  const notify = () => toast.success("Objednávka bola vytvorená");
  const errorRegister = () => toast.error("Objednávka nebola vytvorená");

  const mutation = useMutation(mut.createNewBooking, {
    onSuccess: (data) => {
      notify();
      console.log(data);
    },

    onError: () => {
      errorRegister();
      console.log(data);
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<IBooking>();

  const onHandleSubmit = (data: IBooking) => {
    try {
      mutation.mutate(data);
      console.log(data);
    } catch (err) {
      errorRegister();
      router.push("/books/all");
    }
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
              <LazyLoadImage
                alt="No Image"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src="https://bitsofco.de/content/images/2018/12/broken-1.png"
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
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Počet Strán</span>: {data.pages}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Počet Kusov</span>: {data.quantity}
              </p>

              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Číslo kategórie</span>:{" "}
                {data.categoryId}
              </p>

              {data.status !== "Dostupná" && (
                <div>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-red-800">Nedostupná</span>
                    <br />
                  </p>
                </div>
              )}

              <hr className="mt-6" />
              {data.status === "Dostupná" && (
                <div>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-green-800">{data.status}</span>
                    <br />
                    {user?.email === null || user?.email === undefined ? (
                      <span>
                        <div className="text-xl font-bold mt-4 text-red-800">
                          Ak si chcete požičať knihu musíte byť prihlásení
                        </div>
                      </span>
                    ) : (
                      <HelperModal
                        btnName={"Požičať si knihu"}
                        modalHeader={"Požičanie knihy"}
                      >
                        <form
                          onSubmit={handleSubmit(onHandleSubmit)}
                          className="mt-4"
                        >
                          <label className="block text-grey-darker text-sm font-bold mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Email"
                            {...register("email", {
                              required: "Email je povinný",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Emailová adresa nie je správna",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("email");
                            }}
                          />

                          <p className="text-red-800">
                            {errors.email && errors.email.message}
                          </p>

                          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                            Číslo knihy
                          </label>
                          <input
                            type="number"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="1"
                            {...register("bookId", {
                              required: "Čislo knihy je povinne",
                            })}
                            onKeyUp={() => {
                              trigger("bookId");
                            }}
                          />

                          <p className="text-red-800">
                            {errors.bookId && errors.bookId.message}
                          </p>

                          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                            Od
                          </label>
                          <input
                            type="date"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                            {...register("from", {
                              required: "Dátum od je povinný",
                            })}
                            onKeyUp={() => {
                              trigger("from");
                            }}
                          />

                          <p className="text-red-800">
                            {errors.from && errors.from.message}
                          </p>

                          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                            Do
                          </label>
                          <input
                            type="date"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                            {...register("to", {
                              required: "Dátum do je povinný",
                            })}
                            onKeyUp={() => {
                              trigger("to");
                            }}
                          />

                          <p className="text-red-800">
                            {errors.to && errors.to.message}
                          </p>

                          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
                            Požičať
                          </button>
                        </form>
                      </HelperModal>
                    )}
                  </p>
                </div>
              )}
              <button
                onClick={navigateToBooks}
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

export default BookInfo;
