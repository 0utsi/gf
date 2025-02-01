"use client";
import { usePathname } from "next/navigation";

export function useLastPathSegment(): string {
	const pathname = usePathname();

	const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

	return lastSegment;
}
