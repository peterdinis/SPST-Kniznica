import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ILoginTeacherInfo } from "@/interfaces/ITeacher";
import Image from "next/image";
import AvatarImage from "../../../images/avatar.jpg";

const ProfileHeader: React.FC = () => {
  const [user, setUser] = useState<ILoginTeacherInfo | null>(null);

  const studentUsername = user?.data.user.username;

  useEffect(() => {
    const currentUser = Cookies.get("teacherData");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);
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
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {user?.data.user.email}
        </h1>
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProfileHeader;
