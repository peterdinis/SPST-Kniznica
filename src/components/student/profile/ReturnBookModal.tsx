import ReturnModal from "@/components/shared/modals/ReturnModal";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../../api/mutations/bookingMutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  returnBookingType,
  returnBookingSchema,
} from "@/validators/booking/bookingSchema";
import { IReturnBooking } from "@/interfaces/IBooking";

const ReturnBookModal: React.FC = () => {
  const notify = () => toast.success("Kniha bola vratená");
  const errorRegister = () => toast.error("Kniha nebola vratená");

  const { register, handleSubmit } = useForm<returnBookingType>({
    resolver: zodResolver(returnBookingSchema),
  });

  const mutation = useMutation(mut.returnBooking, {
    onSuccess: (data) => {
      console.log(data)
      notify();
    },

    onError: (data) => {
      console.log(data);
      errorRegister();
    },
  });

  const onHandleSubmit: SubmitHandler<returnBookingType> = (
    data: IReturnBooking
  ) => {
    mutation.mutate(data);
  };

  return (
    <div className="text-sm ml-10 font-normal text-gray-500 tracking-wide">
      <ReturnModal btnName={"Vrátiť knihu"} modalHeader={"Vrátenie knihy"}>
        <form onSubmit={handleSubmit(onHandleSubmit)} className="mt-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Používateľské meno
          </label>
          <input
            type="text"
            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Používateľské meno"
            {...register("username", {
              required: true,
            })}
          />

          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
            Externné id pre knihy
          </label>
          <input
            type="number"
            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
            {...register("bookExternalId", {
              valueAsNumber: true,
              required: true,
            })}
          />

          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
            Vrátiť knihu
          </button>
        </form>
      </ReturnModal>
    </div>
  );
};

export default ReturnBookModal;
