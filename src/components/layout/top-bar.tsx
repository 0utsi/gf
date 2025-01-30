"use client";

import { Stack, IconButton, Button } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Image from "next/image";
import { useMemo } from "react";
import logo from "../../../public/logo.svg";
import flag from "../../../public/polish-flag.svg";

export default function TopBar() {
	const menuItems = useMemo(
		() => [
			{ label: "Obozy", href: "/obozy" },
			{ label: "Półkolonie", href: "/polkolonie" },
			{ label: "Wycieczki szkolne", href: "/wycieczki-szkolne" },
			{ label: "Atrakcje", href: "/atrakcje" },
			{ label: "Noclegi dla grup", href: "/noclegi-grupy" },
		],
		[]
	);
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			px={10}
			py={2}
			boxShadow={2}
		>
			<Stack direction="row" alignItems="center" spacing={4}>
				<Image src={logo} width={150} height={75} alt="logo" />
				<Stack direction="row" spacing={2}>
					{menuItems.map(({ label, href }) => (
						<Button
							className="text-green!"
							key={label}
							variant="text"
							href={href}
						>
							{label}
						</Button>
					))}
				</Stack>
			</Stack>
			<Stack direction="row" alignItems="center" spacing={3}>
				<IconButton>
					<Image src={flag} width={40} height={40} alt="flaga" />
				</IconButton>
				<IconButton>
					<Image src={flag} width={40} height={40} alt="flaga" />
				</IconButton>
				<Button variant="text" startIcon={<PersonOutlineIcon />}>
					Zaloguj się
				</Button>
			</Stack>
		</Stack>
	);
}
