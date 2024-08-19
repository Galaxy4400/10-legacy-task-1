import { deleteTask as deleteTaskApi } from "../api/tasks-api";
import { getTasks } from "./get-tasks";
import { setDeletingStatus } from "./set-deleting-status";

export const deleteTask = (taskId) => {
	return (dispatch) => {
		dispatch(setDeletingStatus(true));

		deleteTaskApi(taskId)
			.then(() => dispatch(getTasks()))
			.finally(() => dispatch(setDeletingStatus(false)));
	};
};
