import dynamic from "next/dynamic";

export const Reasons = dynamic(() => import("./Reasons"));
export const FailedComponent = dynamic(() => import("./FailedComponent"));
