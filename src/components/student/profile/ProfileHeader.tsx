import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ILoginStudentInfo } from "@/interfaces/IStudent";

const ProfileHeader: React.FC = () => {
  const [user, setUser] = useState<ILoginStudentInfo |null>(null);

  useEffect(() => {
    const currentUser = Cookies.get("studentData");
    if(currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);
  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <img
            className="h-auto w-full rounded-2xl mx-auto"
            src="https://picsum.photos/200/300"
            alt="IMAGES"
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
