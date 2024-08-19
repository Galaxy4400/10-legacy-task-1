import { ACTION_TYPE } from "./action-type";

export const setSearchingStatus = (value) => {
	return { type: ACTION_TYPE.SET_SEARCHING_STATUS, payload: Boolean(value) };
};
