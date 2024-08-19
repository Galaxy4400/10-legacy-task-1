import { ACTION_TYPE } from "./action-type";

export const setSearchTerm = (term) => {
	return { type: ACTION_TYPE.SET_SEARCH_TERM, payload: term };
};
