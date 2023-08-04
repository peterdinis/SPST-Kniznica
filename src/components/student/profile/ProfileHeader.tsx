import Image from "next/image";
import AvatarImage from "../../../images/studentPlaceholder.png";
import useStudent from "@/hooks/useStudent";

const ProfileHeader: React.FC = () => {
  const { studentPersonalInfo } = useStudent();

  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <Image
            className="h-auto w-full rounded-2xl mx-auto"
            src={studentPersonalInfo?.picture || AvatarImage}
            alt="Profile Image"
            width={700}
            height={700}
            priority={true}
          />
        </div>
        <h1 className="break-words text-gray-900 font-bold text-xl leading-8 my-6">
          {studentPersonalInfo?.email}
        </h1>
      </div>
    </div>
  );
};

export default ProfileHeader;