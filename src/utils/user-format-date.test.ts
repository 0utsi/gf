import { renderHook } from '@testing-library/react-hooks';
import { useFormatDate } from './use-format-date';

describe('useFormatDate', () => {
	it('returns empty string when provided date is empty', () => {
		const { result } = renderHook(() => useFormatDate(''));
		expect(result.current).toBe('');
	});

	it('returns corectly date from separating rest by T', () => {
		const input = '2025-02-01T10:30:00.000Z';
		const { result } = renderHook(() => useFormatDate(input));
		expect(result.current).toBe('2025-02-01');
	});

	it('zwraca "Brak danych" gdy rozdzielenie nie zwróci żadnej wartości', () => {
		const input = 'BrakTznaku';
		const { result } = renderHook(() => useFormatDate(input));
		expect(result.current).toBe('Brak');
	});
});
