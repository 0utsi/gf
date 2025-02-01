"use client";

import { Button, List, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
	{ label: "Moje dane", icon: <AccountCircleIcon />, isDisabled: true },
	{ label: "Wiadomości", icon: <ChatIcon />, isDisabled: true },
	{
		label: "Rezerwacje",
		icon: <EventNoteIcon />,
		href: "/user/booking",
		isDisabled: false,
	},
	{
		label: "Dedykowane oferty",
		icon: <LocalOfferIcon />,
		href: "/user/offers",
		isDisabled: false,
	},
	{ label: "Wyloguj się", icon: <ExitToAppIcon />, isDisabled: true },
];

export default function Sidebar() {
	const path = usePathname();

	const menuList = useMemo(
		() =>
			menuItems.map(({ label, href, icon, isDisabled }) => (
				<Button
					disabled={isDisabled}
					key={label}
					sx={{
						color: "black",
						textDecoration: path === href ? "underline" : "none",
					}}
					href={href ?? undefined}
					startIcon={icon}
					className="text-gray-800 text-md font-light hover:scale-105 transition underline-offset-4
"
				>
					{label}
				</Button>
			)),
		[path]
	);

	return (
		<div className="h-fit w-50 shadow-sm">
			<Typography variant="h5" className="text-blue-900 font-bold mb-4">
				Moje konto
			</Typography>
			<List className="flex flex-col items-start">{menuList}</List>
		</div>
	);
}
