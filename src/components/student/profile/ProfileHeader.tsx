import { useQuery} from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/FallbackRender";
import * as upl from "../../../api/queries/uploadQueries";
import { PhotoUploadModal } from "../PhotoUploadModal";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const ProfileHeader: React.FC = () => {
  const [user, setUser] = useState<any>(); // TODO: Update later;

  useEffect(() => {
    const currentUser = Cookies.get("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const {
    data,
    isLoading: uploadLoading,
    isError: uploadError,
  } = useQuery(["uploadServerStatus"], upl.checkUploadServer, {
    retry: 2,
  });

  if (uploadLoading) {
    return <FallbackLoader />;
  }
  if (uploadError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  console.log(user);

  return (
  <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <img
            className="h-auto w-full mx-auto"
            src="https://picsum.photos/200/300"
            alt="IMAGES"
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
         rrrr
        </h1>
        
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
          {data.role}
          <span className="float-right">
            <PhotoUploadModal btnName="Nová fotka">
                I am children component
            </PhotoUploadModal>
          </span>
        </p>
      </div>
      <div className="my-4"></div>
    </div> 
  );
};

export default ProfileHeader;
