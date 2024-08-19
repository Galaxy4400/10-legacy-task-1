import { changeTask, setNewTasksOrder } from '../../helpers';
import { Reorder, useDragControls } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../../actions';
import { selectDeletingStatus, selectTasks, selectUpdatingStatus } from '../../selectors';

export const Item = ({ task }) => {
	const { id, title } = task;

	const dispatch = useDispatch();

	const tasks = useSelector(selectTasks);
	const isDeleting = useSelector(selectDeletingStatus);
	const isUpdating = useSelector(selectUpdatingStatus);
	const dragControls = useDragControls();

	const removeHandler = (taskId) => {
		dispatch(deleteTask(taskId));
	};

	const updateHandler = (taskId, input) => {
		const updatingData = { [input.name]: input.value };

		dispatch(updateTask(taskId, updatingData));
	};


	return (
		<Reorder.Item
			className="tasks-list__item"
			value={task}
			dragListener={false}
			dragControls={dragControls}
			onDragEnd={() => setNewTasksOrder(tasks)}
		>
			<div className="tasks-list__title">
				<span className="tasks-list__id" onPointerDown={(event) => dragControls.start(event)}>
					{id}
				</span>
				<input
					className="tasks-list__input"
					type="text"
					name="title"
					value={title}
					onChange={({ target }) => changeTask(id, target, tasks, dispatch)}
					onBlur={({ target }) => updateHandler(id, target)}
					readOnly={isUpdating}
				/>
			</div>
			<button className="tasks-list__remove" onClick={() => removeHandler(id)} disabled={isDeleting}>Удалить</button>
		</Reorder.Item>
	);
};
