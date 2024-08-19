import { ACTION_TYPE } from "../actions";

const initialStatusesState = {
	loading: false,
	creating: false,
	deleting: false,
	updating: false,
	searching: false,
};

export const statusesReducer = (state = initialStatusesState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_LOADING_STATUS: {
			return { ...state, loading: payload };
		}
		case ACTION_TYPE.SET_CREATING_STATUS: {
			return { ...state, creating: payload };
		}
		case ACTION_TYPE.SET_DELETING_STATUS: {
			return { ...state, deleting: payload };
		}
		case ACTION_TYPE.SET_UPDATING_STATUS: {
			return { ...state, updating: payload };
		}
		case ACTION_TYPE.SET_SEARCHING_STATUS: {
			return { ...state, searching: payload };
		}
		default: {
			return state;
		}
	}
};
