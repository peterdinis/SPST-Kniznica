import dynamic from "next/dynamic";

export const LoginForm = dynamic(() => import("./LoginForm"));
export const MyProfile = dynamic(() => import("./MyProfile"));
export const RegisterForm = dynamic(() => import("./RegisterForm"));