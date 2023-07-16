import dynamic from "next/dynamic";

export const AdminAuthors = dynamic(() => import("./authors/AdminAuthors"));
export const AdminBooking = dynamic(() => import("./booking/AdminBooking"));
export const AdminBooks = dynamic(() => import("./books/AdminBooks"));
export const AdminCategories = dynamic(() => import("./categories/AdminCategories"));
export const AdminStudents = dynamic(() => import("./students/AdminStudents"));
export const AdminTeachers = dynamic(() => import("./teachers/AdminTeachers"));
export const LoginForm = dynamic(() => import("./LoginForm"));
export const Messages = dynamic(() => import("./Messages"));
export const MyBooks = dynamic(() => import("./MyBooks"));
export const Options = dynamic(() => import("./Options"));
export const ProfilePage = dynamic(() => import("./ProfilePage"));
export const RegisterForm = dynamic(() => import("./RegisterForm"));
export const ReturnBookModal = dynamic(() => import("./ReturnBookModal"));