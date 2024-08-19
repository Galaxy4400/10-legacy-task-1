import { updateTask as updateTaskApi } from "../api/tasks-api";
import { getTasks } from "./get-tasks";
import { setUpdatingStatus } from "./set-updating-status";

export const updateTask = (taskId, updatingData) => {
	return (dispatch) => {
		dispatch(setUpdatingStatus(true));

		updateTaskApi(taskId, updatingData)
			.then(() => dispatch(getTasks()))
			.finally(() => dispatch(setUpdatingStatus(false)));
	};
};
