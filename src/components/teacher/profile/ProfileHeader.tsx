import { useAuth } from "@/context/AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ProfileHeader: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log("signed in!");
    } else if (user == null) {
      router.push("/notallowed");
    }
  }, [user]);

  if (!user) {
    // user is signed out or still being checked.
    // don't render anything
    return null;
  }

  const userPhoto = user?.photoURL || "https://picsum.photos/200/300";

  return (
    <div className="w-full mt-20 md:w-3/12 md:mx-2">
      <div className="bg-white p-2">
        <div className="image overflow-hidden">
          <img className="h-auto w-full mx-auto" src={userPhoto} alt="IMAGES" />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {user?.email}
        </h1>
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProfileHeader;
