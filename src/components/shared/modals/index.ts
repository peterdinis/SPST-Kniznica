import dynamic from "next/dynamic";

export const ApiModal = dynamic(() => import("./ApiModal"));
export const SmallModal = dynamic(() => import("./SmallModal"));