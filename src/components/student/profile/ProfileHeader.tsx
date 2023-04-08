import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ILoginStudentInfo } from "@/interfaces/IStudent";
import AddIcon from '@mui/icons-material/Add';
import Image from "next/image";
import AvatarImage from "../../../images/avatar.jpg";
import ReturnModal from "@/components/shared/modals/ReturnModal";

const ProfileHeader: React.FC = () => {
  const [user, setUser] = useState<ILoginStudentInfo | null>(null);

  useEffect(() => {
    const currentUser = Cookies.get("studentData");
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
          <div className="mt-2">
            <AddIcon /><span className="text-xl">
              <ReturnModal btnName={"Nová fotka"} modalHeader={"Nahranie novej fotky"}>
                I am children
              </ReturnModal>
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
