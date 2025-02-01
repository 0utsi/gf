"use client";

import React from "react";
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Box,
	Chip,
} from "@mui/material";
import { Offer } from "@/types/offer.type";
import { useRouter } from "next/navigation";
export default function OfferCard({ offer }: { offer: Offer }) {
	const { push } = useRouter();
	const {
		id,
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
		<Card
			className="transition delay-150 duration-300 ease-in-out hover:-translate-y-[2px] hover:scale-105"
			onClick={() => push(`/user/booking/${id}`)}
		>
			<CardActionArea>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						height: "100%",
						minHeight: "250px",
						px: "10px",
						py: "82§px",
						gap: "0.5rem",
					}}
				>
					<Typography
						gutterBottom
						sx={{
							lineHeight: "1.4rem",
							fontSize: "1.1rem",
							fontWeight: "bold",
						}}
					>
						{name ?? "Brak nazwy"}
					</Typography>

					<Typography
						sx={{
							fontSize: "12px",
							lineHeight: "1rem",
						}}
					>
						{description ?? "Brak opisu"}
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

					<Box className="mt-auto self-end">
						<Chip
							label={
								min_price && max_price
									? `Cena: ${min_price / 100} - ${max_price / 100} PLN`
									: "Brak ceny"
							}
							color="primary"
							variant="outlined"
							size="small"
						/>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
