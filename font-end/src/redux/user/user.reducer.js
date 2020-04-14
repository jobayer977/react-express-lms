import { GET_USER, USER_ERROR } from "./user.types";

const initState = {
	user: null,
	loading: true,
	error: {},
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case USER_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
