"use client";

import { ThemeProvider } from "@emotion/react";
import theme from "@/lib/theme-provider";
import "@/lib/globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</body>
		</html>
	);
}
