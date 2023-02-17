import * as api from "../../api/queries/studentQueries";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { useRouter } from "next/router";
import { placeholderBooking } from "@/data/placeholderBooking";
import { useReactTable } from "@tanstack/react-table";
import {useMemo} from "react";

const MyStudentBorrowedBooks: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["myBorrowedBooks", id],
    () => api.getMyBorrowedBooks(id as any),
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

  const columns = useMemo(() => [
    {
      Header: "Moje požičané knihy",
      columns: [
        {
          Header: "Meno knihy"
        }
      ]
    }
  ], []);

  return (
    <>
    
    </>
  )
};

export default MyStudentBorrowedBooks;
