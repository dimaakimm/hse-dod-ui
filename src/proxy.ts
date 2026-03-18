import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { locales } from "@/entities/locale";
import { externalLinks } from "@/shared/config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "ru",
  localePrefix: "never",
});

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathIgnoreName =
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/assets/") ||
    pathname === externalLinks.MAP_LINK ||
    pathname === "/service-worker.js" ||
    pathname === "/favicon-dark.ico";

  if (pathIgnoreName) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}
