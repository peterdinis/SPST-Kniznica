import dynamic from "next/dynamic";

export const MyBooks = dynamic(() => import("./MyBooks"));