"use client";

import React, { useState, useMemo } from "react";
import { Box, List, Pagination, Typography } from "@mui/material";
import { Booking } from "@/types/booking.type";
import BookingItem from "./booking-item";

interface BookingsListProps {
	bookings: Booking[];
	pageSize?: number;
}

export default function BookingsList({
	bookings,
	pageSize = 4,
}: BookingsListProps) {
	const [page, setPage] = useState(1);
	const totalPages = Math.ceil(bookings.length / pageSize);

	const handlePageChange = (
		_event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};

	const currentBookings = useMemo(() => {
		const startIndex = (page - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return bookings.slice(startIndex, endIndex);
	}, [page, pageSize, bookings]);

	if (!bookings || bookings.length < 1) {
		return <Typography>Brak rezerwacji</Typography>;
	}

	return (
		<Box>
			<List>
				{currentBookings.map((booking) => (
					<BookingItem key={booking.id} booking={booking} />
				))}
			</List>
			<Box display="flex" justifyContent="center" marginTop={2}>
				<Pagination
					count={totalPages}
					page={page}
					onChange={handlePageChange}
					color="primary"
				/>
			</Box>
		</Box>
	);
}
