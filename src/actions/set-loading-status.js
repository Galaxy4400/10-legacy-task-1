import { ACTION_TYPE } from "./action-type";

export const setLoadingStatus = (value) => {
	return { type: ACTION_TYPE.SET_LOADING_STATUS, payload: Boolean(value) };
};
