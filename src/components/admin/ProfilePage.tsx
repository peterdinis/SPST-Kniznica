import { Fragment } from "react";
import ProfileBody from "./profile/ProfileBody";
import ProfileHeader from "./profile/ProfileHeader";

const ProfilePage: React.FC = () => {
  return (
    <Fragment>
      <ProfileHeader />
      <ProfileBody />
    </Fragment>
  );
};

export default ProfilePage;
