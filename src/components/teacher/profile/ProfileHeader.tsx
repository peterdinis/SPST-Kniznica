import Image from "next/image";
import AvatarImage from "../../../images/default.png";
import useTeacher from "@/hooks/useTeacher";

const ProfileHeader: React.FC = () => {
  const {teacher} = useTeacher();
  console.log(teacher);

  const teacherUsername = teacher?.data.user.username;
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
          {teacher?.data.user.email}
        </h1>
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProfileHeader;
