import Header from "../shared/Header";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/categoryQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/ErrorRender";
import { placeholderCategory } from "@/data/placeholderCategory";
import { ICategory } from "@/interfaces/ICategory";
import ScrollToTop from "@/hooks/useScroll";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const AllCategories: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    ["categories"],
    api.getCategories,
    {
      retry: 2,
      placeholderData: placeholderCategory,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  return (
    <>
      <Header name="Všetky kategórie" />
      <div className="mt-4 font-bold text-center text-red-800 text-xl">
        <Link href="/category/search">Hľadať konkretnú kategóriu</Link>
      </div>
      <div className="w-full mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.length === 0 && (
          <div className="text-center font-bold mt-4">
            Nenašli sa žiadne kategórie <SentimentVeryDissatisfiedIcon />
          </div>
        )}
        {data &&
          data.map((item: ICategory) => {
            return (
              <>
                <div className="bg-whiterounded py-5 pl-6 flex items-start shadow">
                  <div className="pl-3 pr-10 mt-1">
                    <h3 className="font-normal leading-4 text-red-800 text-2xl break-all">
                      <Link id="categoryName" href={`/category/${item.id}`}>{item.name}</Link>
                    </h3>
                    <h3 className="mt-4 leading-4 text-gray-800 text-lg break-all">
                      <Link href={`/category/${item.id}`}>
                        {item.description}
                      </Link>
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <ScrollToTop />
    </>
  );
};

export default AllCategories;
