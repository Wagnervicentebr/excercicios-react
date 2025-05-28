import { NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTES = ['/home']

export function middleware(request: NextRequest) {
  console.log('middleware running');

    const accessToken = request.cookies.get('accessToken')?.value;
    const path = request.nextUrl.pathname;

    const isProtected = PROTECTED_ROUTES.some((route) => path.startsWith(route));

    if (isProtected && !accessToken) {
      return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    }

    
    
    if (!isProtected && accessToken) {
      console.log('Entrou');

      return NextResponse.redirect(new URL('/home', request.url))
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/home/:path*'],
};