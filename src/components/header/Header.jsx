import { ORDER_TYPES } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, setOrderColumn } from '../../actions';
import { useSearchTasks } from '../../hooks';
import { selectLoadingStatus, selectOrderColumn } from '../../selectors';

export const Header = () => {
	const dispatch = useDispatch();

	const orderColumn = useSelector(selectOrderColumn);
	const isLoading = useSelector(selectLoadingStatus);

	const { searchTerm, setSearchTerm } = useSearchTasks();

	const orderHandler = (column) => {
		dispatch(setOrderColumn(column));
		dispatch(getTasks());
	}

	return (
		<div className="tasks-container__header">
			<h1 className="tasks-container__title">Список задач</h1>
			<select
				className="tasks-container__sort input"
				placeholder="Поле сортировки"
				value={orderColumn}
				onChange={({ target }) => orderHandler(target.value)}
				disabled={isLoading}
			>
				{ORDER_TYPES.map(({ label, value }, i) => <option value={value} key={i}>{label}</option>)}
			</select>
			<input
				className="tasks-container__search input"
				type="text"
				placeholder="Поиск..."
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
			/>
		</div>
	);
};
