import ReturnModal from "@/components/shared/modals/ReturnModal";
import {useMutation} from "@tanstack/react-query";
import * as mut from "../../../api/mutations/studentMutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
const ReturnBookModal: React.FC = () => {
  return (
    <div className="text-sm ml-10 font-normal text-gray-500 tracking-wide">
      <ReturnModal btnName={"Vrátiť knihu"} modalHeader={"Vrátenie knihy"}>
        <form className="mt-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Používateľské meno
          </label>
          <input
            type="text"
            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Používateľské meno"
          />

          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
            Číslo knihy
          </label>
          <input
            type="number"
            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
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
