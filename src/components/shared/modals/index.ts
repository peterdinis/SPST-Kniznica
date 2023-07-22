import dynamic from "next/dynamic";

export const HelperModal = dynamic(() => import("./HelperModal"));
export const ReturnModal = dynamic(() => import("./ReturnModal"));