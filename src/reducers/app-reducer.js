import { ACTION_TYPE } from "../actions";
import { ORDER_TYPES } from "../constants";

const initialAppState = {
	tasks: [],
	orderColumn: ORDER_TYPES[0].value,
	searchTerm: '',
};

export const appReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_TASKS: {
			return { ...state, tasks: payload };
		}
		case ACTION_TYPE.SET_ORDER_COLUMN: {
			return { ...state, orderColumn: payload };
		}
		case ACTION_TYPE.SET_SEARCH_TERM: {
			return { ...state, searchTerm: payload };
		}
		default: {
			return state;
		}
	}
};
