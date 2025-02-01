import { Stack, Typography, List } from "@mui/material";
import bookings from "../../../data/response_bookings.json";
import BookingItem from "./components/booking-item";
import { Booking } from "../../../types/booking.type";

export default function Page() {
	return (
		<Stack>
			<Typography variant="h5" className="text-blue-900 text-xl">
				Rezerwacje
			</Typography>
			<List>
				{bookings.map((booking) => (
					<BookingItem
						key={booking.id}
						booking={booking as unknown as Booking}
					/>
				))}
			</List>
		</Stack>
	);
}
