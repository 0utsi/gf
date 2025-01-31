"use client";

import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
	return (
		<div className="h-screen flex items-center justify-center bg-gray-50">
			<Link href="/user/offers" passHref>
				<Button
					variant="contained"
					color="primary"
					size="large"
					className="text-white font-semibold px-6 py-3 text-lg"
				>
					Powrót
				</Button>
			</Link>
		</div>
	);
}
