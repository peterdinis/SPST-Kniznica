import * as api from "../../api/queries/studentQueries";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { useRouter } from "next/router";
import { placeholderBooking } from "@/data/placeholderBooking";

const MyStudentBorrowedBooks: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["myBorrowedBooks", Number(id)],
    () => api.getMyBorrowedBooks(Number(id) as any),
    {
      retry: 1,
      placeholderData: placeholderBooking,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  console.log(data);

  return <>eeeeeeeeeeeeeeeeeeeeeeeeeeeee</>;
};

export default MyStudentBorrowedBooks;
