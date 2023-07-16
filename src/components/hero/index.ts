import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero"));
export const Services = dynamic(() => import("./Services"));