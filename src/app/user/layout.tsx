"use client";

import { Box } from "@mui/material";
import TopBar from "@/components/layout/top-bar";
import { ReactNode } from "react";
import Sidebar from "@/components/layout/side-bar";

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
	return (
		<div className="w-full h-screen flex flex-col">
			<Box className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
				<div className="max-w-screen-xl mx-auto">
					<TopBar />
				</div>
			</Box>
			<div className="flex flex-1 mt-[120px] max-w-screen-xl mx-auto px-6 w-full">
				<div className="w-64 flex-shrink-0">
					<Sidebar />
				</div>
				<div className="flex-1 p-6 overflow-auto">{children}</div>
			</div>
		</div>
	);
}
