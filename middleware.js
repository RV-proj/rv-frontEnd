import { auth } from "@/_lib/authSession/auth";
export const middleware = auth;

export const config = {
  matcher: ["/order/:path*"],
};
