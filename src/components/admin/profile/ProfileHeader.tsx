import Image from "next/image";
import AvatarImage from "../../../images/default.png";

const ProfileHeader: React.FC = () => {
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
         ffff
        </h1>
      </div>
    </div>
    )
}

export default ProfileHeader;