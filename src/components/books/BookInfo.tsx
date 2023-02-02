import Header from "../shared/Header";
import * as api from "../../api/queries/bookQueries";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

const BookInfo: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["categoryDetail", Number(id)],
    () => api.getOneBook(Number(id) as any)
  );

  console.log(data);

  const navigateToBooks = () => {
    router.push("/books");
  };
  return (
    <>
      <Header name="Detail Knihy" />
    </>
  );
};

export default BookInfo;
