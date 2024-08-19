import { createTask as createTaskApi } from "../api/tasks-api";
import { getTasks } from "./get-tasks";
import { setCreatingStatus } from "./set-creating-status";

export const createTask = (data) => {
	return (dispatch) => {
		dispatch(setCreatingStatus(true));

		createTaskApi(data)
			.then(() => dispatch(getTasks()))
			.finally(() => dispatch(setCreatingStatus(false)));
	};
};
