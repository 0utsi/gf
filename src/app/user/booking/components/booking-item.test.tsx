import React from "react";
import { render } from "@testing-library/react";
import BookingItem from "./booking-item";

const mockBooking = {
	id: "1234",
	created_at: "2025-02-01T10:30:00.000Z",
	product_data: { description: "Test" },
	participants: [],
	total_price: 100,
	original_total_price: 100,
	payment_due_date: "2025-02-05T10:30:00.000Z",
	trip_name: `Asia trip`,
	status_label: "Confirmed",
	payment_status: "Paid",
	trip_data: {
		start_date: "2025-02-01T00:00:00.000Z",
		end_date: "2025-02-10T00:00:00.000Z",
	},
	product_id: "",
	type_label: "",
	company_name: "",
};

describe("booking-item", () => {
	it("renders corect booking information from passed data", async () => {
		const { findByText } = render(<BookingItem booking={mockBooking} />);
		expect(await findByText(/Asia trip/i)).toBeInTheDocument();
		expect(await findByText(/2025-02-05/i)).toBeInTheDocument();
		expect(await findByText(/Paid/i)).toBeInTheDocument();
	});
});
