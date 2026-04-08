import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Laat de onderhoudspagina zelf door, anders oneindige redirect
  if (url.pathname === "/onderhoud") return NextResponse.next();

  url.pathname = "/onderhoud";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
