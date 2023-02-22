import Header from "../shared/Header";
import * as api from "../../api/queries/bookQueries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderBook } from "@/data/placeholderBook";
import { BookingModal } from "../booking/BookingModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimatePresence } from "framer-motion";
import * as mut from "../../api/mutations/bookingMutation";
import { toast } from "react-toastify";
import { IBooking } from "@/api/interfaces/IBooking";
import { useForm } from "react-hook-form";
import { Suspense, useState, useEffect } from "react";
import SkeletonLoader from "../shared/SkeletonLoader";
import { IStudent } from "@/api/interfaces/IUser";
import Cookies from "js-cookie";
import { useStudent } from "@/hooks/useStudent";

const BookInfo: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["bookDetail", Number(id)],
    () => api.getOneBook(Number(id) as any),
    {
      retry: 2,
      placeholderData: placeholderBook,
    }
  );

  const {student} = useStudent();

  if (isError) {
    return <FallbackRender error="Something went wrong" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  const navigateToBooks = () => {
    router.push("/books/all");
  };

  const loggedUser = student?.id

  const actualUser =
    loggedUser === null || loggedUser === undefined ? "" : loggedUser;

  const successBorrow = () => toast.success("Objednávka knihy bola úspešná");

  const mutation = useMutation(mut.borrowedBook, {
    onSuccess: (data) => {
      successBorrow();
      console.log(data);
    },

    onError: (data) => {
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
      router.push("/books/success");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Suspense fallback={<SkeletonLoader />}>
      <AnimatePresence>
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
                  <span className="font-bold">Počet Kusov</span>:{" "}
                  {data.quantity}
                </p>

                <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                  <span className="font-bold">Číslo kategórie</span>:{" "}
                  {data.categoryId}
                </p>

                {data.status !== "Dostupná" && (
                  <>
                    <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                      <span className="font-bold"> Kniha je:</span>{" "}
                      <span className="text-red-800">Nedostupná</span>
                      <br />
                    </p>
                  </>
                )}

                <hr className="mt-6" />
                {data.status === "Dostupná" && (
                  <>
                    <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                      <span className="font-bold"> Kniha je:</span>{" "}
                      <span className="text-green-800">{data.status}</span>
                      <br />
                      {student?.email === null ||
                      student?.email === undefined ? (
                        <>
                          <div className="text-xl font-bold mt-4 text-red-800">
                            Ak si chcete požičať knihu musíte byť prihlásení
                          </div>
                        </>
                      ) : (
                        <>
                          <BookingModal btnName="Chcem si požičať knihu">
                            <hr />
                            <form className="mt-4">
                              <label className="block text-grey-darker text-sm font-bold mb-2">
                                Meno
                              </label>
                              <input
                                type="text"
                                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Meno"
                              />
                              <br />
                              <label className="block text-grey-darker text-sm font-bold mb-2">
                                Priezvisko
                              </label>
                              <input
                                type="text"
                                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Priezivsko"
                              />
                              <br />
                              <label className="block text-grey-darker text-sm font-bold mb-2">
                                Od
                              </label>
                              <input
                                type="date"
                                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="11.1.2001"
                              />
                              <br />
                              <label className="block text-grey-darker text-sm font-bold mb-2">
                                Do
                              </label>
                              <input
                                type="date"
                                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="11.1.2001"
                              />
                              <br />
                              <label className="block text-grey-darker text-sm font-bold mb-2">
                                Id používateľa
                              </label>
                              <input
                                type="text"
                                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="janko@hrasko.com"
                                value={actualUser}
                              />{" "}
                              <br />
                              <label className="block text-grey-darker text-sm font-bold mb-2">
                                Číslo knihy
                              </label>
                              <input
                                type="number"
                                className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="1"
                                value={id}
                              />
                              <button className="outline-none mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
                                Požičať Knihu
                              </button>
                            </form>
                          </BookingModal>
                        </>
                      )}
                    </p>
                  </>
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
      </AnimatePresence>
    </Suspense>
  );
};

export default BookInfo;
