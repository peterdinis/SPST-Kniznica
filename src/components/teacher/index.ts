import dynamic from "next/dynamic";

export const LoginForm = dynamic(() => import("./LoginForm"));
export const MyProfile = dynamic(() => import("./MyProfile"));
export const RegisterForm = dynamic(() => import("./RegisterForm"));
export const MyBooks = dynamic(() => import("./profile/MyBooks"));
export const Options = dynamic(() => import("./profile/Options"));
export const ProfileBody = dynamic(() => import("./profile/ProfileBody"));
export const ProfileHeader = dynamic(() => import("./profile/ProfileHeader"));
export const ReturnBookModal = dynamic(() => import("./profile/ReturnBookModal"));
