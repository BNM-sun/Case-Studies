import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const gated = request.cookies.get("bnm_gate");
  if (!gated) {
    const dest = request.nextUrl.pathname + request.nextUrl.search;
    const url = request.nextUrl.clone();
    url.pathname = "/gate";
    url.search = `?next=${encodeURIComponent(dest)}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!gate$|api/gate|_next/static|_next/image|favicon\\.ico).*)",
  ],
};
