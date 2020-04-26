import {
	CLEAR_PROFILE,
	REGISTER_SUCCESS,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "./auth.types";
import axios from "axios";
import setAuthToken from "../../util/setAuthToken";
import { alertAction } from "../alert/alertAction";

//USER LOADED
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const res = await axios.get("/api/user");
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (e) {
		dispatch({
			type: AUTH_ERROR,
		});
		dispatch(alertAction(e.message, "danger"));
	}
};

// REGISTER
export const registerUser = ({ uid, displayName, email, avatar }) => async (
	dispatch
) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({
		uid,
		displayName,
		email,
		avatar,
	});
	try {
		const res = await axios.post("/api/user/signup", body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
	} catch (e) {
		const errors = e.response.data.errors;
		if (errors) {
			errors.map((x) => dispatch(alertAction(x.msg, "danger")));
		}
	}
};
// SIGN IN WITH GOOGLE
export const authwithgoogle = ({ uid, displayName, email, avatar }) => async (
	dispatch
) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({
		uid,
		displayName,
		email,
		avatar,
	});
	try {
		const res = await axios.post("/api/user/authwithgoogle", body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
	} catch (e) {
		dispatch(alertAction(e.message, "danger"));
	}
};

//Sign IN
export const signIn = ({ email, uid }) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({
		email,
		uid,
	});
	try {
		const res = await axios.post("/api/user/signin", body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
		console.log(res);
		dispatch(loadUser());
	} catch (e) {
		dispatch({
			type: LOGIN_FAIL,
		});
		dispatch(alertAction(e.message, "danger"));
	}
};

// LOGOUT
export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
	dispatch({
		type: CLEAR_PROFILE,
	});
};
