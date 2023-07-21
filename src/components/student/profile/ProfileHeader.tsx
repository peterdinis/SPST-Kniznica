import Image from "next/image";
import { useState } from "react";
import AvatarImage from "../../../images/noImage.png";
import useStudent from "@/hooks/useStudent";
import ImageUploadModal from "@/components/shared/ImageModal";
import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL as unknown as string;

const ProfileHeader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { studentPersonalInfo } = useStudent();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("avatar", selectedFile);

      try {
        const response = await axios.post(
          `${backendURL}student/${studentPersonalInfo!.id}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const updatedStudentInfo = {
          ...studentPersonalInfo,
          picture: response.data.picture,
        };

        console.log(updatedStudentInfo);

      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsLoading(false);
      }
    }
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
