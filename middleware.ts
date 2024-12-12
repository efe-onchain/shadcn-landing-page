import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the user agent
  const userAgent = request.headers.get("user-agent") || "";

  // Check if it's the OpenAI SearchBot
  const isOpenAIBot = userAgent.includes("OAI-SearchBot");

  // Create the response
  const response = NextResponse.next();

  // Add security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Special handling for OpenAI SearchBot
  if (isOpenAIBot) {
    response.headers.set("X-Robots-Tag", "index,follow");
  }
  logBotVisit(request);
  return response;
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
     */
    "/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)",
  ],
};

export async function logBotVisit(request: NextRequest) {
  const headersList = request.headers;
  const path = request.nextUrl.pathname;
  const method = request.method;

  const requestHeaders: Record<string, string> = {};
  headersList.forEach((value, key) => {
    requestHeaders[key] = value;
  });

  try {
    fetch("https://api.darkvisitors.com/visits", {
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
    });
  } catch (error) {
    console.error("Failed to log visit:", error);
  }

  return NextResponse.next();
}
