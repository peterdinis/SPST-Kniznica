import { useQuery, useMutation } from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/FallbackRender";
import * as upl from "../../../api/queries/uploadQueries";
import { PhotoUploadModal } from "../PhotoUploadModal";
import Cookies from "js-cookie";
import { useState, useEffect, MouseEvent } from "react";
import { IStudent } from "@/api/interfaces/IUser";
import { useRouter } from "next/router";
import * as mut from "../../../api/mutations/uploadMutation"

const ProfileHeader: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<IStudent | null>(null);
  const [fileSelected, setFileSelected] = useState<string |Blob>();

  const currentUser = Cookies.get("currentUser");
  useEffect(() => {
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, [currentUser]);

  const {
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

  /* TODO: This could be issue in production */
  /* TODO1:  uncaughtException: Error: No router instance found. you should only use "next/router" inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance*/
  if (currentUser === undefined) {
    setTimeout(() => {
      router.push("/");
    }, 1000);
    return null;
  }

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;
    
    setFileSelected(fileList[0]);
  };

  const uploadFile = function (e: MouseEvent<HTMLSpanElement, MouseEvent>) {
    if (fileSelected) {
        const formData = new FormData();
        formData.append("image", fileSelected, fileSelected.name);
    }
};
  
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
          {user?.email!}
        </h1>

        <p className="text-sm text-gray-500 font-bold hover:text-gray-600 leading-6">
          {user?.role!}
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
