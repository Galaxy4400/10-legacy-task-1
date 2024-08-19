import { ACTION_TYPE } from "./action-type";

export const setUpdatingStatus = (value) => {
	return { type: ACTION_TYPE.SET_UPDATING_STATUS, payload: Boolean(value) };
};
