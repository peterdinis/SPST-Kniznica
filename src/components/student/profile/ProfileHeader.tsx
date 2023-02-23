import { useQuery } from "@tanstack/react-query";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/FallbackRender";
import * as upl from "../../../api/queries/uploadQueries";
import { PhotoUploadModal } from "../PhotoUploadModal";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, useEffect } from "react";
import { IStudent } from "@/api/interfaces/IUser";
import Cookies from "js-cookie";

const ProfileHeader: React.FC = () => {
  const router = useRouter();
  const [student, setStudent] = useState<IStudent | null>(null);

  const currentStudent = Cookies.get("currentStudent");
  useEffect(() => {
    if (currentStudent) {
      setStudent(JSON.parse(currentStudent));
    }
  }, [currentStudent]);
  /* TODO: Later update this type */
  const [file, setFile] = useState<any>();
  const [preview, setPreview] = useState(undefined);

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const onSelectFile = (e: { target: { files: string | [] } }) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setFile(e.target.files[0]);
  };

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

  console.log(currentStudent, student);

  /* TODO: This could be issue in production */
  /* TODO1:  uncaughtException: Error: No router instance found. you should only use "next/router" inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance*/
  if (currentStudent === undefined) {
    setTimeout(() => {
      router.push("/");
    }, 1000);
    return null;
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": file.type,
        "content-length": `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
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
          {student?.email!}
        </h1>

        <p className="text-sm text-gray-500 font-bold hover:text-gray-600 leading-6">
          {student?.role!}
          <span className="float-right">
            <PhotoUploadModal btnName="Nová fotka">
              <div className="flex items-center justify-center">
                <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                  <CloudUploadIcon className="text-5xl" />
                  <span className="mt-2 text-base leading-normal">
                    Vybrať súbor
                  </span>
                  <form>
                  <input
                    hidden
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                  />

                  <button
                    className="mt-4 text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    onClick={handleUploadClick}
                  >
                    Nahrať obrázok
                  </button>
                  </form>
                </label>
              </div>
              <div className="mt-10">{file && <img src={preview} />}</div>
            </PhotoUploadModal>
          </span>
        </p>
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProfileHeader;
