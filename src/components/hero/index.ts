import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero"), {ssr: false});
export const Services = dynamic(() => import("./Services"));