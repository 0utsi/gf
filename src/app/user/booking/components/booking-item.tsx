import React from "react";
import {
	Typography,
	Avatar,
	ListItem,
	ListItemAvatar,
	Box,
	Divider,
} from "@mui/material";
import { Booking } from "../../../../types/booking.type";

export default function BookingItem({ booking }: { booking: Booking }) {
	const {
		created_at,
		product_data,
		participants,
		total_price,
		original_total_price,
		payment_due_date,
		trip_name,
		status_label,
		payment_status,
	} = booking;

	return (
		<ListItem sx={{ width: "100%", display: "flex" }}>
			<ListItemAvatar>
				<Avatar alt={""} src="/static/images/avatar/1.jpg" />
			</ListItemAvatar>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					flex: 1,
				}}
			>
				<Typography variant="h5">{trip_name}</Typography>
				<Divider />
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{`Status: ${status_label} (${payment_status})`}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{`Termin płatności: ${new Date(
							payment_due_date
						).toLocaleDateString()}`}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{`Cena: ${total_price} PLN (oryginalna: ${original_total_price} PLN)`}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{`Data rezerwacji: ${new Date(created_at).toLocaleDateString()}`}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{product_data.description ?? "Brak opisu"}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{`Liczba uczestników: ${participants ? participants.length : 0}`}
					</Typography>
				</Box>
			</Box>
		</ListItem>
	);
}
