import { useQuery } from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/FallbackRender";
import { placeholderStudent } from "@/data/placeholderStudent";
import * as api from "../../../api/queries/studentQueries";
import * as upl from "../../../api/queries/uploadQueries";

const ProfileHeader: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    ["studentProfile"],
    () => api.studentProfile,
    {
      placeholderData: placeholderStudent,
    }
  );

  const {
    data: uploadData,
    isLoading: uploadLoading,
    isError: uploadError,
  } = useQuery(["uploadServerStatus"], upl.checkUploadServer, {
    retry: 2,
  });

  console.log(uploadData);

  if (isLoading || uploadLoading) {
    return <FallbackLoader />;
  }
  if (isError || uploadError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-3 border-t-4 border-green-400">
        <div className="image overflow-hidden">
          <img
            className="h-auto w-full mx-auto"
            src="https://picsum.photos/200/300"
            alt="IMAGES"
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {data.name} {data.lastName}
        </h1>
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
          {data.role}
        </p>
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProfileHeader;
