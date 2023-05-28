import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";


export function middleware(request: NextRequest) {
    const adminCookie = Cookies.get("adminPersonalData");
    const teacherCookie = Cookies.get("teacherPersonalInfo");
    const url = request.nextUrl.clone();

    if(teacherCookie || adminCookie) {
        if(request.nextUrl.pathname.startsWith("/admin")) {
            
        }
    }
}