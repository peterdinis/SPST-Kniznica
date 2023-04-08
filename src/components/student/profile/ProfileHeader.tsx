import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ILoginStudentInfo } from "@/interfaces/IStudent";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import AvatarImage from "../../../images/avatar.jpg";
import ReturnModal from "@/components/shared/modals/ReturnModal";
import axios from "axios";

const ProfileHeader: React.FC = () => {
  const [user, setUser] = useState<ILoginStudentInfo | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const studentUsername = user?.data.user.username;

  useEffect(() => {
    const currentUser = Cookies.get("studentData");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  // TODO: FIxing this later

/*   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      try {
        // Create a FormData object to send the file to the server
        const formData = new FormData();
        formData.append("file", file);

        // Send a POST request to the server to upload the file
        const response = await axios.post(
          `http://localhost:8111/student/${studentUsername}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Log the saved file data to the console
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFile(file);
  }; */

  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <Image
            className="h-auto w-full rounded-2xl mx-auto"
            src={AvatarImage}
            alt="IMAGES"
            width={700}
            height={700}
          />
          <div className="mt-2">
            <AddIcon />
            <span className="text-xl">
              Nová fotka
            {/*   <ReturnModal
                btnName={"Nová fotka"}
                modalHeader={"Nahranie novej fotky"}
              >
                <form>

                  <div className="flex  items-center justify-center bg-grey-lighter">
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Vyberete súbor
                      </span>
                      <input type="file" className="hidden" id="file" />
                    </label>
                  </div>
                </form>
              </ReturnModal> */}
            </span>
          </div>
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {user?.data.user.email}
        </h1>
      </div>
    </div>
  );
};

export default ProfileHeader;
