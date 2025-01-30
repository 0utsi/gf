"use client";

import { Box, Stack } from "@mui/material";
import TopBar from "../../components/layout/top-bar";
import { ReactNode } from "react";
import Sidebar from "../../components/layout/side-bar";
import Container from "@mui/material/Container";
interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
	return (
		<Container>
			<Box
				className="fixed top-0 left-0 w-full bg-white shadow-xs"
				sx={{
					zIndex: 1000,
				}}
			>
				<TopBar />
			</Box>

			<Stack direction="row" sx={{ flex: 1 }}>
				<Box>
					<Sidebar />
				</Box>

				<Box sx={{ flex: 1, overflow: "auto", p: 2 }}>{children}</Box>
			</Stack>
		</Container>
	);
}
