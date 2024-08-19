import { setTasks } from "../actions/set-tasks";

export const changeTask = (taskId, input, tasks, dispatch) => {
	const changingTasks = tasks.map((task) => (task.id === taskId ? { ...task, title: input.value } : task));

	dispatch(setTasks(changingTasks));
}
