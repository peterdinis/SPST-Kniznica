import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ITeacher } from "@/api/interfaces/ITeacher";

const ProfileHeader: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<ITeacher | null>(null);

  const currentTeacher = Cookies.get("currentTeacher");
  useEffect(() => {
    if (currentTeacher) {
      setUser(JSON.parse(currentTeacher));
    }
  }, [currentTeacher]);

  if (currentTeacher === undefined) {
    setTimeout(() => {
      router.push("/");
    }, 1000);
    return null;
  }

  return (
    <>
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
            {user?.email!}
          </h1>

          <p className="text-sm text-gray-500 font-bold hover:text-gray-600 leading-6">
            {user?.role!}
          </p>
        </div>
        <div className="my-4"></div>
      </div>
    </>
  );
};

export default ProfileHeader;
