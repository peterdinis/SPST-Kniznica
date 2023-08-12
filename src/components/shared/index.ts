import dynamic from "next/dynamic";

export const Seo = dynamic(() => import("./Seo"), {ssr: false});
export const Mailto = dynamic(() => import("./Mailto"), {ssr: false});
export const Layout = dynamic(() => import("./Layout"));
export const Header = dynamic(() => import("./Header"),{ssr: false});
export const Footer = dynamic(() => import("./Footer"),{ssr: false});
export const FallbackLoader = dynamic(() => import("./FallbackLoader"));
export const DateTimePick = dynamic(() => import("./DateTimePicker"), {ssr: false});
export const Creator = dynamic(() => import("./Creator"), {ssr: false});
export const Navbar = dynamic(() => import("./navbar/Navbar"));
export const NavbarLinks = dynamic(() => import("./navbar/NavbarLinks"));
export const FallbackRender = dynamic(() => import("./errors/FallbackRender"));