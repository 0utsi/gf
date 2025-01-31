import React from "react";
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Box,
	Chip,
} from "@mui/material";
import { Offer } from "../../../../types/offer.type";

export default function OfferCard({ offer }: { offer: Offer }) {
	const {
		name,
		description,
		location,
		min_price,
		max_price,
		min_age,
		max_age,
		company_name,
	} = offer;

	return (
		<Card className="hover:scale-105 transition-transform bg-gray-50">
			<CardActionArea>
				<CardContent className="flex flex-col h-full justify-between">
					<Box>
						<Typography gutterBottom variant="h6">
							{name || "Brak nazwy"}
						</Typography>

						<Typography variant="body2">
							{description || "Brak opisu"}
						</Typography>

						{location?.city && (
							<Typography variant="body2" className="my-1">
								Lokalizacja: {location.city} ({location.province})
							</Typography>
						)}

						{min_age && max_age && (
							<Typography variant="body2">
								Wiek: {min_age} - {max_age} lat
							</Typography>
						)}

						{company_name && (
							<Typography variant="caption" className="mt-1">
								Organizator: {company_name}
							</Typography>
						)}
					</Box>

					<Box className="mt-auto">
						<Chip
							label={
								min_price && max_price
									? `Cena: ${min_price / 100} - ${max_price / 100} PLN`
									: "Brak ceny"
							}
							className="text-orange-500"
							variant="outlined"
							size="small"
						/>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
