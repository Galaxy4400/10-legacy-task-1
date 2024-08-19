import { updateTask } from "../api/tasks-api";

export const setNewTasksOrder = (tasks) => {
	tasks.forEach((task, i) => updateTask(task.id, {...task, order: i + 1}));
};
