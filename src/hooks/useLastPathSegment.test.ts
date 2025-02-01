import { renderHook } from "@testing-library/react-hooks";
import { useLastPathSegment } from "./useLastPathSegment";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
	usePathname: jest.fn(),
}));

describe("useLastPathSegment", () => {
	it("returns last segment of provided pathname", () => {
		(<jest.Mock>usePathname).mockReturnValue("/user/offer");

		const { result } = renderHook(() => useLastPathSegment());

		expect(result.current).toBe("offer");
	});

	it("return empty string if pathname is '/'", () => {
		(usePathname as jest.Mock).mockReturnValue("/");

		const { result } = renderHook(() => useLastPathSegment());

		expect(result.current).toBe("");
	});

	it("returns empty string when path ends with /", () => {
		(usePathname as jest.Mock).mockReturnValue("/user/");

		const { result } = renderHook(() => useLastPathSegment());

		expect(result.current).toBe("");
	});
});
