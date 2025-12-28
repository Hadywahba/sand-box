import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
const authRoutes = ['^/login$', '^/forgot-password(/.*)?$'];
const protectedRoutes = ['^/$'];
export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const redirectUrl = new URL('/login', request.nextUrl.origin);
  redirectUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);

  if (
    protectedRoutes.some((route) =>
      new RegExp(route).test(request.nextUrl.pathname),
    )
  ) {
    if (token) return NextResponse.next();

    return NextResponse.redirect(redirectUrl);
  }
  if (
    authRoutes.some((route) => new RegExp(route).test(request.nextUrl.pathname))
  ) {
    if (!token) return NextResponse.next();
    return NextResponse.redirect(new URL('/', request.nextUrl.origin));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
