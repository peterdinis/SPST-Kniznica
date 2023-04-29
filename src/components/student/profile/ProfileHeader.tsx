import Image from "next/image";
import AvatarImage from "../../../images/default.png";
import useStudent from "@/hooks/useStudent";
import PhotoModal from "./PhotoModal";

const ProfileHeader: React.FC = () => {
  const {student} = useStudent();

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
          {student?.data.user.email}
        </h1>
        <PhotoModal btnName={"Nová fotka"} modalHeader={"Nová fotka"}>
          <div className="bg-blue-50 px-4 flex-col">
            <form className="flex shadow-md rounded flex-col py-12 px-4">
              <button type="button" className="w-full text-lg font-bold border-dashed h-56 border-4">
                Vybrať obrázok
              </button>
            </form>
          </div>
        </PhotoModal>
      </div>
    </div>
  );
};

export default ProfileHeader;
