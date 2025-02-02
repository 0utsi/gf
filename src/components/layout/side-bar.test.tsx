import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./side-bar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
	usePathname: jest.fn(),
}));

describe("side-bar", () => {
	it("renders heading 'Moje konto'", () => {
		(usePathname as jest.Mock).mockReturnValue("/some/path");
		render(<Sidebar />);
		expect(screen.getByText(/Moje konto/i)).toBeInTheDocument();
	});

	it("renders all menu items", () => {
		(usePathname as jest.Mock).mockReturnValue("/user/booking");
		render(<Sidebar />);
		expect(screen.getByText(/Moje dane/i)).toBeInTheDocument();
		expect(screen.getByText(/Wiadomości/i)).toBeInTheDocument();
		expect(screen.getByText(/Rezerwacje/i)).toBeInTheDocument();
		expect(screen.getByText(/Dedykowane oferty/i)).toBeInTheDocument();
		expect(screen.getByText(/Wyloguj się/i)).toBeInTheDocument();
	});

	it("underlines the 'Rezerwacje' button when current path is /user/booking", () => {
		(usePathname as jest.Mock).mockReturnValue("/user/booking");
		render(<Sidebar />);
		const rezerwacjeButton = screen.getByText(/Rezerwacje/i).closest("a");
		expect(rezerwacjeButton).toHaveStyle("text-decoration: none");
	});

	it("does not underline the 'Rezerwacje' button when path does not match", () => {
		(usePathname as jest.Mock).mockReturnValue("/inny/path");
		render(<Sidebar />);
		const rezerwacjeButton = screen.getByText(/Rezerwacje/i).closest("a");
		expect(rezerwacjeButton).toHaveStyle("text-decoration: none");
	});
});
