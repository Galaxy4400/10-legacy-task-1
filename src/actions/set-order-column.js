import { ACTION_TYPE } from "./action-type";

export const setOrderColumn = (column) => {
	return { type: ACTION_TYPE.SET_ORDER_COLUMN, payload: column };
};
