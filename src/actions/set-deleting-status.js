import { ACTION_TYPE } from "./action-type";

export const setDeletingStatus = (value) => {
	return { type: ACTION_TYPE.SET_DELETING_STATUS, payload: Boolean(value) };
};
