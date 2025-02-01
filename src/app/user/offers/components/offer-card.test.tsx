import React from "react";
import { render } from "@testing-library/react";
import OfferCard from "./offer-card";
import { Offer } from "../../../../types/offer.type";

jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: jest.fn(),
	}),
}));
export const mockOffer: Offer = {
	id: "offer-001",
	name: "Example Offer",
	description: "This is an example offer used for testing purposes.",
	location: {
		city: "Warsaw",
		province: "Mazowieckie",
	},
	min_price: 100,
	max_price: 200,
	min_age: 10,
	max_age: 18,
	company_name: "Example Company",
	image: "https://example.com/image.jpg",
};

describe("offer-card", () => {
	it("renders correct product information from passed data", async () => {
		const { findByText } = render(<OfferCard offer={mockOffer} />);
		expect(
			await findByText(/This is an example offer used for testing purposes./i)
		).toBeInTheDocument();
		expect(await findByText(/Example Company/i)).toBeInTheDocument();
		expect(await findByText(/Warsaw/i)).toBeInTheDocument();
	});
});
