import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, protectedRoutes } from "./routes";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;

  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser || Date.now() > JSON.parse(currentUser).epxiredAt)
  ) {
    request.cookies.delete("currentUser");
    request.cookies.delete("studentAccessToken");
    const response = NextResponse.redirect(
      new URL("/student/login", request.url)
    );
    response.cookies.delete("currentUser");
    response.cookies.delete("studentAccessToken");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    return NextResponse.redirect(new URL("/student/profile", request.url));
  }
}
