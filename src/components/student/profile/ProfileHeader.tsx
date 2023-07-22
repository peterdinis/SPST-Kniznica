import Image from "next/image";
import { useState, useRef } from "react";
import AvatarImage from "../../../images/noImage.png";
import useStudent from "@/hooks/useStudent";
import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL as unknown as string;

const ProfileHeader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { studentPersonalInfo } = useStudent();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
  };

  const handleClose = () => {
    setSelectedFile(null);
    setIsModalOpen(false);
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

        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Nová fotka</h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                onClick={() => fileInputRef.current?.click()}
              />
              <div className="flex mt-4 justify-between">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={handleClose}
                >
                  Zavrieť
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={handleUpload}
                >
                  Nahrať
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
