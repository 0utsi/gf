import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	NextResponse.json({ message: "Middleware działa!" });
	if (!request.nextUrl.pathname.startsWith('/user/booking')) {
		return NextResponse.rewrite(new URL('/user/booking', request.url))
	}

	if (request.nextUrl.pathname.startsWith('/user/offers')) {
		return NextResponse.rewrite(new URL('/user/offers', request.url))
	}
}