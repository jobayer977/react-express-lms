import { GET_USER, USER_ERROR } from "./user.types";

export const getUserData = (data) => async (dispatch) => {
	try {
		dispatch({
			type: GET_USER,
			payload: data,
		});
	} catch (error) {
		if (error.response) {
			dispatch({
				type: USER_ERROR,
				payload: {
					msg: error.response.data,
					status: error.response.data.status,
				},
			});
		}
	}
};
