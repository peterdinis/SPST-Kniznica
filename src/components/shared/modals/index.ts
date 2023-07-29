import dynamic from "next/dynamic";

export const ReturnModal = dynamic(() => import("./ReturnModal"));
export const ApiModal = dynamic(() => import("./ApiModal"));