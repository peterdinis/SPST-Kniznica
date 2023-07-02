import Image from "next/image";
import AvatarImage from "../../../images/noImage.png";
import useStudent from "@/hooks/useStudent";
import HelperModal from "@/components/shared/modals/HelperModal";

const ProfileHeader: React.FC = () => {
  const { studentPersonalInfo } = useStudent();
  
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
          <HelperModal btnName={"Nová fotka"} modalHeader={"Nahranie novej fotky"}>rrrr</HelperModal>
        </div>
        <h1 className="text-gray-900 font-bold text-xl break-words leading-8 my-6">
          {studentPersonalInfo?.email}
        </h1>
      </div>
    </div>
  );
};

export default ProfileHeader;
