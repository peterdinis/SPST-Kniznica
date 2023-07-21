import Image from "next/image";
import { useState } from "react";
import AvatarImage from "../../../images/noImage.png";
import useStudent from "@/hooks/useStudent";
import ImageUploadModal from "@/components/shared/ImageModal";

const ProfileHeader: React.FC = () => {
  const { studentPersonalInfo } = useStudent();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload = (file: File) => {
    // Implement your image upload logic here
    console.log("Uploading file:", file.name);
  };

  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <Image
            className="h-auto w-full rounded-2xl mx-auto"
            src={AvatarImage}
            alt="Default Image"
            width={700}
            priority={true}
            height={700}
          />
        </div>
        <h1 className="break-words text-gray-900 font-bold text-xl leading-8 my-6">
          {studentPersonalInfo?.email}
        </h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setIsModalOpen(true)}
        >
          Nová fotka
        </button>
        <ImageUploadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpload={handleUpload}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
