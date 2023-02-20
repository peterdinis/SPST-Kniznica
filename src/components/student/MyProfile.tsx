import ProtectedRoute from "@/routes/student/ProtectedRoute";
import ProfileHeader from "./profile/ProfileHeader";
import ProfileBody from "./profile/ProfileBody";

const MyProfile: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <ProfileHeader />
          <ProfileBody />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default MyProfile;
