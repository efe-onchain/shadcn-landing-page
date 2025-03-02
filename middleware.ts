import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Fire and forget the logging - don't await it
  logBotVisit(request).catch(console.error);
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     * 6. XML files (e.g. BingSiteAuth.xml)
     */
    "/((?!api|_next|fonts|examples|[\\w-]+\\.xml|[\\w-]+\\.\\w+).*)",
  ],
};

async function logBotVisit(request: NextRequest) {
  const headersList = request.headers;
  const path = request.nextUrl.pathname;
  const method = request.method;

  const requestHeaders: Record<string, string> = {};
  headersList.forEach((value, key) => {
    requestHeaders[key] = value;
  });

  try {
    await fetch("https://api.darkvisitors.com/visits", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.DARK_VISITORS_ACCESS_TOKEN!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request_path: path,
        request_method: method,
        request_headers: requestHeaders,
      }),
      // Add timeout and retry options
      signal: AbortSignal.timeout(2000), // 2 second timeout
    });
  } catch (error) {
    // Log the error but don't throw it
    console.error("Failed to log visit:", error);
  }
}
