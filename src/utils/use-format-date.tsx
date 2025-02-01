import { useMemo } from "react";

export function useFormatDate(dateString: string): string {
	return useMemo(() => {
		if (!dateString) return "";
		const [datePart] = dateString.split("T");
		return datePart;
	}, [dateString]);
}
