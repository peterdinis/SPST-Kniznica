import dynamic from "next/dynamic";

export const GlobalErrorComponent = dynamic(() => import("./GlobalErrorComponent"));
export const GlobalBoundary = dynamic(() => import("./GlobalBoundary"));