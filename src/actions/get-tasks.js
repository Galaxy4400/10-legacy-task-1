import { getTasks as getTasksApi } from "../api/tasks-api";
import { setLoadingStatus } from "./set-loading-status";
import { setSearchingStatus } from "./set-searching-status";
import { setTasks } from "./set-tasks";

export const getTasks = () => {
	return (dispatch, getState) => {
		const { orderColumn, searchTerm } = getState().app;

		dispatch(setLoadingStatus(true));

		getTasksApi({ orderColumn, searchTerm })
			.then(response => response.json())
			.then(tasks => dispatch(setTasks(tasks)))
			.finally(() => {
				dispatch(setLoadingStatus(false));
				dispatch(setSearchingStatus(false));
			});
	}
};
