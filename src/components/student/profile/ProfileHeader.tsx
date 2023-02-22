import { useQuery, useMutation } from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/FallbackRender";
import * as upl from "../../../api/queries/uploadQueries";
import { PhotoUploadModal } from "../PhotoUploadModal";
import Cookies from "js-cookie";
import { useState, useEffect, MouseEvent } from "react";
import { IStudent } from "@/api/interfaces/IUser";
import { useRouter } from "next/router";
import * as mut from "../../../api/mutations/uploadMutation";
import { IFile } from "@/api/interfaces/IFile";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ProfileHeader: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<IStudent | null>(null);
  /* TODO: Later update this type */
  const [fileSelected, setFileSelected] = useState<IFile | any>();

  const currentUser = Cookies.get("currentUser");
  useEffect(() => {
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, [currentUser]);

  const { isLoading: uploadLoading, isError: uploadError } = useQuery(
    ["uploadServerStatus"],
    upl.checkUploadServer,
    {
      retry: 2,
    }
  );

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
      formData.append("file", fileSelected, fileSelected.name);
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
              <div className="flex items-center justify-center bg-grey-lighter">
                <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                  <CloudUploadIcon className="text-5xl" />
                  <span className="mt-2 text-base leading-normal">
                    Vybrať súbor
                  </span>
                  <form>
                  <input multiple={false} accept="image/*" type="file" className="hidden" />
                  </form>
                </label>
              </div>
            </PhotoUploadModal>
          </span>
        </p>
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProfileHeader;
