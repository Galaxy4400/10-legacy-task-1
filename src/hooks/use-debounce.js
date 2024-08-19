import { useState, useEffect } from 'react';

export const useDebounce = (value, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(debounceTimeout);
	}, [value]);

	return debouncedValue;
};
