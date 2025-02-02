import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				p: 2,
			}}
		>
			<Typography variant="h3" gutterBottom>
				Strona nie została znaleziona
			</Typography>
			<Typography variant="body1" gutterBottom>
				Przepraszamy, ale strona, której szukasz, nie istnieje.
			</Typography>
			<Link href="/user/booking" passHref>
				<Button variant="contained" color="primary">
					Przejdź do ofert
				</Button>
			</Link>
		</Box>
	);
}
