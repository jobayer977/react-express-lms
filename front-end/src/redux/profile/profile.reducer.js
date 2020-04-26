import { USER_LOADED } from "../auth/auth.types";
import { UPDATE_PROFILE, ACTIVE_LESSON } from "./profile.types";
const INITIAL_STATE = {
	data: {},
	loading: true,
	activeLesson: null,
};

const profileReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				data: action.payload,
				loading: false,
			};

		case UPDATE_PROFILE:
			return {
				...state,
				data: action.payload,
			};
		case ACTIVE_LESSON:
			return {
				...state,
				activeLesson: action.payload,
			};
		default:
			return state;
	}
};
export default profileReducer;
