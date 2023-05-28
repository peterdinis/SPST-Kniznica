import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";
import { CREATE_BOOK, CREATE_CATEGORY } from "./constants/routePrefix";


export function middleware(request: NextRequest) {
    const adminCookie = Cookies.get("adminPersonalData");
    const teacherCookie = Cookies.get("teacherPersonalInfo");
    const url = request.nextUrl.clone();

    if(teacherCookie || adminCookie) {
        if(request.nextUrl.pathname.startsWith(CREATE_BOOK) || request.nextUrl.pathname.startsWith(CREATE_CATEGORY)) {
            return NextResponse.rewrite(new URL("/", request.url));
        }
    } else {
        return NextResponse.redirect(request.url);
    }
}