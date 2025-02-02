import React from "react";
import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import TopBar from "./top-bar";

jest.mock("next/navigation", () => ({
	usePathname: jest.fn(),
}));

describe("top-bar", () => {
	it("renders all top-bar items", () => {
		(usePathname as jest.Mock).mockReturnValue("/user/booking");
		render(<TopBar />);
		expect(screen.getByText(/Obozy/i)).toBeInTheDocument();
		expect(screen.getByText(/Półkolonie/i)).toBeInTheDocument();
		expect(screen.getByText(/Wycieczki szkolne/i)).toBeInTheDocument();
		expect(screen.getByText(/Atrakcje/i)).toBeInTheDocument();
		expect(screen.getByText(/Noclegi dla grup/i)).toBeInTheDocument();
	});
});
