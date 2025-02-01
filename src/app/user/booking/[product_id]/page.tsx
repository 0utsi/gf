"use client";

import { List, Stack, Typography } from "@mui/material";
import bookings from "../../../../data/response_bookings.json";
import BookingItem from "../components/booking-item";
import { Booking } from "../../../../types/booking.type";
import filter from "lodash/filter";
import { useLastPathSegment } from "../../../../hooks/useLastPathSegment";

export default function Page() {
	const product_id = useLastPathSegment();

	const productBooking = filter(bookings, ["product_id", product_id]);

	if (productBooking.length === 0 || !productBooking) {
		return (
			<div className="h-screen flex justify-center pt-[150px]">
				<Typography variant="h5">Brak rezerwacji dla tej ofery</Typography>
			</div>
		);
	}

	return (
		<Stack>
			<Typography variant="h5" className="text-blue-900 text-xl">
				Rezerwacje
			</Typography>
			<List>
				{productBooking.map((booking) => (
					<BookingItem
						key={booking.id}
						booking={booking as unknown as Booking}
					/>
				))}
			</List>
		</Stack>
	);
}
