import Header from "../shared/Header";
import * as api from "../../api/queries/bookQueries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import FallbackRender from "../shared/errors/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderBook } from "@/data/placeholderBook";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as mut from "../../api/mutations/bookingMutations";
import { ICreateBooking } from "@/interfaces/IBooking";
import { useForm, SubmitHandler } from "react-hook-form";
import HelperModal from "../shared/modals/HelperModal";
import {
  createBookingSchema,
  createBookingType,
} from "@/validators/booking/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useCopyToClipboard from "@/hooks/useCopy";
import { CopyIcon } from "@chakra-ui/icons";
import Image from "next/image";
import defaultImage from "../../images/noImage.png";
import { getBookInfoError } from "../../constants/errorMessages";
import { notify, errorRegister } from "../shared/toasts/bookToasts";
import { motion } from "framer-motion";
import useStudent from "@/hooks/useStudent";
import useAdmin from "@/hooks/useAdmin";
import useTeacher from "@/hooks/useTeacher";
import CustomTooltip from "../shared/tooltip/CustomTooltip";
import { ApiModal } from "../shared/modals";

const BookInfo: React.FC = () => {
  const { query, isReady } = useRouter();

  if (!isReady) {
    return <FallbackLoader />;
  }

  const { data, isError, isLoading } = useQuery(
    ["bookDetail", query.id as unknown as number],
    () =>
      api.getOneBook(
        Number(query.id as unknown as number) as unknown as string
      ),
    {
      retry: 2,
      placeholderData: placeholderBook,
    }
  );

  if (isError) {
    return <FallbackRender error={getBookInfoError} />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }
  const [value, copy] = useCopyToClipboard();
  const router = useRouter();

  const navigateToBooks = () => {
    router.push("/books/all");
  };

  const mutation = useMutation(mut.createNewBooking, {
    onSuccess: (data) => {
      notify();
      router.push("/books/all");
    },

    onError: () => {
      errorRegister();
      router.push("/booking/failed");
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    register,
  } = useForm<createBookingType>({
    resolver: zodResolver(createBookingSchema),
  });

  const { student } = useStudent();
  const { admin } = useAdmin();
  const { teacher } = useTeacher();

  const onHandleSubmit: SubmitHandler<createBookingType> = (
    data: ICreateBooking
  ) => {
    try {
      if (!student && !admin && !teacher) {
        router.push("/forbidden");
      } else {
        mutation.mutate(data);
        reset();
        router.push("/books/all");
      }
    } catch (err) {
      errorRegister();
      router.push("/books/all");
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <Header name="Detail Knihy" />
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {(data.book && data.book.image === null) ||
              (data.book && data.book.image === undefined) ||
              (data.book && data.book.image === "string") ? (
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
                <span className="break-words">
                  {data.book && data.book.description}
                </span>
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Id knihy pre požičanie</span>:{" "}
                <CopyIcon
                  className="transform scale-10"
                  onClick={() => copy(data.book.id)}
                />{" "}
                {data.book && data.book.id}
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
              {data.book && data.book.status === "Dostupná" && (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-green-800">
                      {data.book && data.book.status}
                    </span>
                  </p>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                  >
                    <HelperModal
                      btnName={"Požičať si knihu"}
                      modalHeader={"Požičanie knihy"}
                    >
                      <form
                        onSubmit={handleSubmit(onHandleSubmit)}
                        className="mt-4"
                      >
                        <label className="block text-grey-darker text-sm font-bold mb-2">
                          Používateľské meno
                        </label>
                        <input
                          type="text"
                          className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                          placeholder="Používateľské meno"
                          {...register("username", {
                            required: "Meno je povinné",
                          })}
                          onKeyUp={() => {
                            trigger("username");
                          }}
                        />

                        <p className="text-red-800">
                          {errors.username && errors.username.message}
                        </p>

                        <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                          Číslo knihy
                        </label>
                        <input
                          type="number"
                          className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                          {...register("bookId", {
                            valueAsNumber: true,
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

                        <CustomTooltip label={"Kniha je dostupná na týždeň!"} placement={"end"}>
                          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
                            Požičať
                          </button>
                        </CustomTooltip>
                      </form>
                    </HelperModal>
                  </motion.div>
                </>
              )}
              <button
                onClick={navigateToBooks}
                className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold"
              >
                Návrat na knihy
              </button>
              <br />
              {(teacher || admin) && (
                <>
                  <button className="float-right">
                    <ApiModal
                      modalButtonText={"Uprav kategóriu"}
                      modalHeaderText={"Uprav kategóriu"}
                      modalCloseText={"Zatvor"}
                    >
                      CHILDREN
                    </ApiModal>
                  </button>
                  <button className="mr-4 float-right">
                    <ApiModal
                      modalButtonText={"Zmazať kategóriu"}
                      modalHeaderText={"Zmazať kategóriu"}
                      modalCloseText={"Zatvor"}
                    >
                      CHILDREN
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

export default BookInfo;
