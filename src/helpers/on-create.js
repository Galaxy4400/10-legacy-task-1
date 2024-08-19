import { createTask } from "../actions";
import { maxOrderValue } from "./max-order-value";

export const onCreate = (event, tasks, formData, setFormData, defaultFormState, dispatch) => {
	event.preventDefault();

	if (!formData.title) return;

	dispatch(createTask({ ...formData, order: maxOrderValue(tasks) + 1}));

	setFormData(defaultFormState);
};
