import React from "react";
import {
	Typography,
	ListItem,
	ListItemAvatar,
	Box,
	Divider,
	Stack,
} from "@mui/material";
import { Booking } from "@/types/booking.type";
import { useFormatDate } from "@/utils/use-format-date";
import { useRandomIcon } from "../../../../hooks/userRandomIcon";
export default function BookingItem({ booking }: { booking: Booking }) {
	const Icon = useRandomIcon();

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
		trip_data,
		company_name,
	} = booking;

	return (
		<ListItem
			sx={{ width: "100%", display: "flex", borderBottom: "1px solid black" }}
		>
			<ListItemAvatar>
				<Icon sx={{ fontSize: "3rem" }} />
			</ListItemAvatar>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					flex: 1,
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box>
						<Typography variant="h5" color="primary">
							{trip_name}
						</Typography>
						<Typography sx={{ fontSize: "10px" }} color="secondary">
							{company_name}
						</Typography>
					</Box>
					<Typography sx={{ fontSize: "12px" }}>
						{`Od ${trip_data.start_date} do ${trip_data.end_date}`}
					</Typography>
				</Stack>
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
						{`Termin płatności: ${useFormatDate(payment_due_date)}`}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{`Cena: ${total_price} PLN (oryginalna: ${original_total_price} PLN)`}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.primary" }}>
						{`Data rezerwacji: ${useFormatDate(created_at)}`}
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
