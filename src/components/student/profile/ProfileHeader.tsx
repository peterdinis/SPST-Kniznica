import { useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import AvatarImage from "../../../images/default.png";
import ReturnModal from "@/components/shared/modals/ReturnModal";
import axios from "axios";
import useStudent from "@/hooks/useStudent";

const ProfileHeader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const {student} = useStudent();
  const studentUsername = student?.data.user.username;

  // TODO: FIxing this later

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      try {
        // Create a FormData object to send the file to the server
        const formData = new FormData();
        formData.append("file", file);

        // Send a POST request to the server to upload the file
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/${studentUsername}/upload`,
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
  };

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
              <ReturnModal
                btnName={"Nová fotka"}
                modalHeader={"Nahranie novej fotky"}
              >
                <form onSubmit={handleSubmit}>
                  <div className="text-center">
                    <div className="mt-4 grid grid-cols-1 space-y-2">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                          <div className="h-full w-full text-center flex flex-col items-center justify-center">
                            <p className="pointer-none text-gray-500 ">
                              <span className="text-sm">Drag and drop</span>{" "}
                              files here <br /> or{" "}
                              <a
                                href=""
                                id=""
                                className="text-blue-600 hover:underline"
                              >
                                select a file
                              </a>{" "}
                              from your computer
                            </p>
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                    <p className="text-sm mt-4 text-black">
                      <span>Povolené typy obrázkov: doc,pdf,types of images</span>
                    </p>
                    <div></div>
                  </div>
                </form>
              </ReturnModal>
            </span>
          </div>
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {student?.data.user.email}
        </h1>
      </div>
    </div>
  );
};

export default ProfileHeader;
