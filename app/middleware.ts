import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Retrieve token using the next-auth's getToken function
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If the user is not logged in, redirect to the sign-in page
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  // Continue with the request if the user is authenticated
  return NextResponse.next();
}

// Define which paths should use the middleware
export const config = {
  matcher: ["/tasks/:path*", "/user/:path*"], // Paths to protect
};
