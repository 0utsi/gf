import { Stack, Typography, List } from "@mui/material";
import bookings from "../../../data/response_bookings.json";
import BookingsList from "./components/booking-list";

export default function Page() {
	return (
		<Stack>
			<Typography variant="h5" className="text-blue-900 text-xl">
				Wszystkie rezerwacje
			</Typography>
			<List>
				<BookingsList bookings={bookings} />
			</List>
		</Stack>
	);
}
