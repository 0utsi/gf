"use client";

import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useMemo } from "react";

const menuItems = [
	{ label: "Moje dane", icon: <AccountCircleIcon />, href: "/my-data" },
	{ label: "Wiadomości", icon: <ChatIcon />, href: "/messages" },
	{ label: "Rezerwacje", icon: <EventNoteIcon />, href: "/booking" },
	{
		label: "Dedykowane oferty",
		icon: <LocalOfferIcon />,
		href: "/dedykowane-oferty",
	},
	{ label: "Wyloguj się", icon: <ExitToAppIcon />, href: "/logout" },
];

export default function Sidebar() {
	const menuList = useMemo(
		() =>
			menuItems.map(({ label, icon, href }) => (
				<ListItemButton key={label} href={href}>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={label} />
				</ListItemButton>
			)),
		[]
	);

	return <List className="w-64">{menuList}</List>;
}
