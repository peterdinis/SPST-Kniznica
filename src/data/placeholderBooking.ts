import { IBooking } from "@/interfaces/IBooking";
import Dayjs from "dayjs";

export const placeholderBooking = [
  {
    username: "Janko Hraško",
    from: Dayjs().format(new Date().toISOString()),
    to: Dayjs().format(new Date().toISOString()),
    bookId: 1,
  },
] as IBooking[];
