import Link from "next/link";
import Header from "../shared/Header";

const GetAllAuthors: React.FC = () => {
  return (
    <>
      <Header name="Všetci spisovatelia" />
      <div className="mt-4 font-bold text-center text-red-800 text-xl">
        <Link href="/authors/search">Hľadať konkretného spisovateľa</Link>
      </div>
    </>
  );
};

export default GetAllAuthors;
