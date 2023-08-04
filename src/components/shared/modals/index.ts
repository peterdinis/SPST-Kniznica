import dynamic from "next/dynamic";

export const ApiModal = dynamic(() => import("./MainModal"));
export const SmallModal = dynamic(() => import("./SecondaryModal"));