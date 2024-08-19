export const maxOrderValue = (tasks) => {
	return tasks.reduce((max, task) => max < task.order ? task.order : max, 0);
};
