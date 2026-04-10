import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('karmah_token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isProtectedPage = request.nextUrl.pathname.startsWith('/tasks');

  // If user is on a protected page without a token, redirect to login
  if (isProtectedPage && !token) {
    const loginUrl = new URL('/login', request.url);
    // Optional: add a return url
    // loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If user is logged in and tries to access auth pages, redirect to dashboard
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/tasks', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/tasks/:path*', '/login'],
};
