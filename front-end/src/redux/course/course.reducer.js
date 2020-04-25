import {
	CREATE_COURSE,
	CREATE_COURSE_ERROR,
	GET_ALL_COURSE,
	UPDATE_MODULE,
} from "./course.types";

const initState = {
	loading: true,
	data: [],
};

const courseReducer = (state = initState, action) => {
	switch (action.type) {
		case CREATE_COURSE:
			return {
				...state,
				data: [...state.data, action.payload],
				loading: false,
			};
		case UPDATE_MODULE:
			return {
				...state,
				data: state.data.map((x) =>
					x._id === action.payload._id
						? { ...x, outline: action.payload.outline }
						: x
				),
				loading: false,
			};
		case CREATE_COURSE_ERROR:
			return {
				...state,
				loading: false,
			};
		case GET_ALL_COURSE:
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default courseReducer;
