import { ACTION_TYPE } from "./action-type";

export const setCreatingStatus = (value) => {
	return { type: ACTION_TYPE.SET_CREATING_STATUS, payload: Boolean(value) };
};
