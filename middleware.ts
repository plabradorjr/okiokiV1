import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parse } from "cookie";

// Define the routes that need to be protected
const protectedRoutes = ["/", "/maps"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the user is authenticated by checking the cookie
  const cookies = parse(req.headers.get("cookie") || "");
  const isAuthenticated = cookies.authenticated === "true";

  if (protectedRoutes.includes(pathname) && !isAuthenticated) {
    // Redirect to the login page if not authenticated
    const loginUrl = new URL(
      "/login",
      `${req.nextUrl.origin}${req.nextUrl.pathname}`
    );
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to continue if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"], // Protect all routes except API, static files, etc.
};
