import ProfileBody from "./profile/ProfileBody";
import ProfileHeader from "./profile/ProfileHeader";

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        <ProfileHeader />
        <ProfileBody />
      </div>
    </div>
  );
};

export default ProfilePage;
