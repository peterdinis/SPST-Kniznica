import DateTimePicker from "../shared/DateTimePicker";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/exampleQuery";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/ErrorRender";
import HeroImage from "../../images/heroImage.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { testStudent } from "@/data/testStudent";
import { testTeacher } from "@/data/testTeacher";
import { queryClient } from "@/api/queryClient";

function Hero() {
  const { data, isLoading, isError } = useQuery(["example"], api.getExampleData, {
    retry: 2,
  });
  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error={"Nastala chyba"} />;
  }

  queryClient.setQueryData(["exampleData"], data);

  Cookies.set("testStudentData", testStudent as unknown as string);
  Cookies.set("testTeacherData", testTeacher as unknown as string);

  return (
    <>
      <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
        <div className="w-full mb-8 lg:w-1/2 h-full lg:pr-10 xl:pr-0">
          <Image
           className="mx-auto" 
           src={HeroImage}
           alt="Hero Image"
           width={700}
           height={700}
          />
        </div>
        <div role="contentinfo" className="w-full lg:w-1/2 h-full">
          <h1 className="ml-8 text-indigo-700 text-4xl lg:text-6xl font-black mb-8">
            Školská Knižnica
          </h1>
          <DateTimePicker />
          <div className="ml-8 text-gray-800 text-xl font-regular mb-8 mt-6">
            Knihy sú jedinečne prenosné kúzlo -{" "}
            <span className="font-bold">Stephen King</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
