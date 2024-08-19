import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';
import { useDispatch } from 'react-redux';
import { getTasks, setSearchingStatus, setSearchTerm as setSearchTermAction} from '../actions';

export const useSearchTasks = () => {
	const dispatch = useDispatch();

	const [searchTerm, setSearchTerm] = useState('');

	const debouncedSearchTerm = useDebounce(searchTerm);

	useEffect(() => {
		dispatch(setSearchTermAction(debouncedSearchTerm))
		dispatch(setSearchingStatus(true));
		dispatch(getTasks());
	}, [debouncedSearchTerm]);

	return { searchTerm, setSearchTerm };
};
