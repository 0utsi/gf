import { useEffect, useState } from "react";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightIcon from "@mui/icons-material/Flight";
import WbSunny from "@mui/icons-material/WbSunny";
import Landscape from "@mui/icons-material/Landscape";
import HikingIcon from '@mui/icons-material/Hiking';
import WavesIcon from '@mui/icons-material/Waves';

const icons = [WavesIcon, BeachAccessIcon, FlightIcon, HikingIcon, WbSunny, Landscape];

export function useRandomIcon() {
	const [IconComponent, setIconComponent] = useState<typeof icons[0]>(() => icons[0]);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * icons.length);
		setIconComponent(icons[randomIndex]);
	}, []);

	return IconComponent;
}
