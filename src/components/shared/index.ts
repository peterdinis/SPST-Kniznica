import dynamic from "next/dynamic";

export const Seo = dynamic(() => import("./Seo"));
export const Mailto = dynamic(() => import("./Mailto"));
export const Layout = dynamic(() => import("./Layout"));
export const Header = dynamic(() => import("./Header"));
export const Footer = dynamic(() => import("./Footer"));
export const FallbackLoader = dynamic(() => import("./FallbackLoader"));
export const DateTimePick = dynamic(() => import("./DateTimePicker"));
export const Creator = dynamic(() => import("./Creator"));
export const AdminDropdown = dynamic(() => import("./notifications/AdminDropdown"));
export const NotificationDropdown = dynamic(() => import("./notifications/NotificationDropdown"));
export const TeacherDropdown = dynamic(() => import("./notifications/TeacherDropdown"));
