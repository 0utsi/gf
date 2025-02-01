import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingsList from "./booking-list";
import { Booking } from "@/types/booking.type";

const createBooking = (id: string): Booking => ({
	id,
	created_at: "2025-02-01T10:30:00.000Z",
	product_data: { description: "Test" },
	participants: [],
	total_price: 100,
	original_total_price: 100,
	payment_due_date: "2025-02-05T10:30:00.000Z",
	trip_name: `Trip ${id}`,
	status_label: "Confirmed",
	payment_status: "Paid",
	trip_data: {
		start_date: "2025-02-01T00:00:00.000Z",
		end_date: "2025-02-10T00:00:00.000Z",
	},
	product_id: "",
	type_label: "",
	company_name: "",
});

const bookings = Array.from({ length: 12 }, (_, i) =>
	createBooking(`id-${i + 1}`)
);

describe("BookingsList", () => {
	it("renders 'Brak rezerwacji' when bookings list is empty", async () => {
		const { findByText } = render(<BookingsList bookings={[]} pageSize={5} />);
		expect(await findByText(/Brak rezerwacji/i)).toBeInTheDocument();
	});

	it("renders first page with correct bookings", async () => {
		const { findByText, queryByText } = render(
			<BookingsList bookings={bookings} pageSize={5} />
		);
		expect(await findByText("Trip id-1")).toBeInTheDocument();
		expect(await findByText("Trip id-5")).toBeInTheDocument();
		expect(queryByText("Trip id-6")).not.toBeInTheDocument();
	});

	it("changes page when pagination is clicked", async () => {
		const { findByText, queryByText, getByText } = render(
			<BookingsList bookings={bookings} pageSize={5} />
		);
		const page2Button = getByText("2");
		await userEvent.click(page2Button);
		expect(await findByText("Trip id-6")).toBeInTheDocument();
		expect(queryByText("Trip id-1")).not.toBeInTheDocument();
	});
});
