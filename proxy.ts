import { NextResponse, type NextRequest } from "next/server";

const legacyPathRedirects: Record<string, string> = {
  "/IT-Strategy": "/it-strategy",
  "/Scope-of-works": "/scope-of-works",
  "/HR-Strategy": "/hr-strategy",
  "/HR-Services": "/hr-services",
  "/IT-Services": "/it-services",
  "/Career-Counselling": "/career-counselling",
  "/Health-Tourism": "/health-tourism",
};

export function proxy(request: NextRequest) {
  const requestHost =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  const hostname = requestHost.split(",")[0].split(":")[0].toLowerCase();

  if (hostname === "www.aaa-fe.com") {
    const canonicalUrl = new URL("https://aaa-fe.com");
    canonicalUrl.pathname = request.nextUrl.pathname;
    canonicalUrl.search = request.nextUrl.search;
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const jobMatch = request.nextUrl.pathname.match(/^\/job\/([^/]+)\/?$/);
  if (jobMatch && jobMatch[1] !== "1") {
    return NextResponse.rewrite(new URL("/_not-found", request.url), {
      status: 404,
    });
  }

  const destination = legacyPathRedirects[request.nextUrl.pathname];
  if (destination) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.pathname = destination;
    return NextResponse.redirect(canonicalUrl, 308);
  }

  return NextResponse.next();
}
