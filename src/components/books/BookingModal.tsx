import { ICreateBooking } from "@/interfaces/IBooking";
import {
  createBookingType,
  createBookingSchema,
} from "@/validators/booking/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { ApiModal } from "../shared/modals";
import { notify, errorRegister } from "../shared/toasts/loginToasts";
import * as mut from "../../api/mutations/bookingMutations";
import useStudent from "@/hooks/useStudent";
import useAdmin from "@/hooks/useAdmin";
import useTeacher from "@/hooks/useTeacher";
import { Text } from "@chakra-ui/react";

const BookingModal: React.FC = () => {
  const { student } = useStudent();
  const { admin } = useAdmin();
  const { teacher } = useTeacher();

  const mutation = useMutation(mut.createNewBooking, {
    onSuccess: () => {
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

  const onHandleSubmit: SubmitHandler<createBookingType> = (
    data: ICreateBooking
  ) => {
    try {
      if (!student && !admin && !teacher) {
        router.push("/conflict");
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
    <motion.div initial="hidden" animate="visible" variants={itemVariants}>
      <ApiModal
        modalButtonText={"Požičať si knihu"}
        modalHeaderText={"Požičať si knihu"}
        modalCloseText={"Zavrieť"}
        className="bg-blue-200 rounded-lg p-2 font-extrabold"
      >
        <form onSubmit={handleSubmit(onHandleSubmit)} className="mt-4">
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

          <p className="text-red-800">{errors.from && errors.from.message}</p>
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

          <p className="text-red-800">{errors.to && errors.to.message}</p>
          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
            Požičať
          </button>
          <Text mt={6} color="red.800" fontWeight={"bold"}>
            Pred požičaním si skontroluje údaje!!!
          </Text>
        </form>
      </ApiModal>
    </motion.div>
  );
};

export default BookingModal;
