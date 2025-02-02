"use client";

import { Stack, IconButton, Button } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Image from "next/image";
import { useMemo } from "react";
import logo from "../../../public/logo.svg";
import flag from "../../../public/polish-flag.svg";
import Link from "next/link";
import poundIcon from "../../../public/pound-icon.svg";

export default function TopBar() {
	const menuItems = useMemo(
		() => [
			{ label: "Obozy" },
			{ label: "Półkolonie" },
			{ label: "Wycieczki szkolne" },
			{ label: "Atrakcje" },
			{ label: "Noclegi dla grup" },
		],
		[]
	);

	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			className=" py-4 shadow-sm bg-white"
		>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Image
					src={logo}
					width={150}
					id="logo"
					height={75}
					alt="logo"
					priority
					className="w-auto h-auto"
				/>
				<Stack direction="row" spacing={6}>
					{menuItems.map(({ label }) => (
						<Link
							key={label}
							href=""
							className="text-gray-800 text-sm font-light hover:scale-105 transition"
						>
							{label}
						</Link>
					))}
				</Stack>
			</Stack>
			<Stack direction="row" alignItems="center" spacing={3}>
				<IconButton disabled>
					<Image priority src={flag} width={30} height={30} alt="flag" />
				</IconButton>
				<IconButton disabled>
					<Image
						priority
						src={poundIcon}
						width={12}
						className="w-auto h-auto"
						height={12}
						alt="currency"
					/>
				</IconButton>
				<Button
					startIcon={<PersonOutlineIcon />}
					disabled
					className="text-black"
				>
					Zaloguj się
				</Button>
			</Stack>
		</Stack>
	);
}
