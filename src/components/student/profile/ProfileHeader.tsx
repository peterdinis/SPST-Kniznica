import Image from "next/image";
import AvatarImage from "../../../images/default.png";
import useStudent from "@/hooks/useStudent";
import PhotoModal from "./PhotoModal";
import { FilePond, registerPlugin } from "react-filepond";
import { useState } from "react";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginGetFile from "filepond-plugin-get-file";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import { FilePondFile } from "@/interfaces/IFile";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginGetFile,
  FilePondPluginImageCrop,
  FilePondPluginImageResize
);

const ProfileHeader: React.FC = () => {
  const { studentPersonalInfo } = useStudent();
  console.log(studentPersonalInfo);
  /* TODO: Fix typing */
  const [files, setFiles] = useState<FilePondFile | any>();

  const handleFileUpload = (files: FilePondFile[]) => {
    setFiles(files);
  };

  const serverUrl = `${
    process.env.NEXT_PUBLIC_BACKEND_URL as unknown as string
  }api/upload/${studentPersonalInfo?.username}`;

  const pictureForStudent = studentPersonalInfo?.picture;
  const removePathFromPicture = pictureForStudent?.substring(8);

  console.log(removePathFromPicture);
  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <Image
            className="h-auto w-full rounded-2xl mx-auto"
            src={AvatarImage}
            alt="Default Image"
            width={700}
            height={700}
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {studentPersonalInfo?.email}
        </h1>
        {/* Uncomment later */}
       {/*  <PhotoModal btnName={"Nová fotka"} modalHeader={"Nahranie novej fotky"}>
          <FilePond
            files={files}
            onupdatefiles={handleFileUpload}
            allowMultiple={false}
            acceptedFileTypes={["image/*"]}
            labelIdle="Vybrať obrázok"
            server={serverUrl}
            allowDrop={true}
            allowImagePreview={true}
            imagePreviewMaxHeight={550}
            imagePreviewMarkupShow={true}
            allowImageCrop={true}
            labelTapToUndo="Skúsiť znova"
            labelFileLoading="Nahrávam..."
            labelFileAdded="Súbor bol úspešne nahraný"
          />
        </PhotoModal> */}
      </div>
    </div>
  );
};

export default ProfileHeader;
