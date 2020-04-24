import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_LOGIN_ERRORS,
} from "./auth.types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loginError: null,
	loading: true,
	user: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload,
			};

		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			};
		case LOGIN_FAIL:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				loginError: true,
			};
		case CLEAR_LOGIN_ERRORS:
			return {
				...state,
				loginError: false,
			};
		default:
			return state;
	}
};
export default authReducer;
