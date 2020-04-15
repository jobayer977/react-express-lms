import {
	CREATE_COURSE,
	CREATE_COURSE_ERROR,
	GET_ALL_COURSE,
} from "./course.types";

const initState = {
	loading: true,
	course: [],
};

const courseReducer = (state = initState, action) => {
	switch (action.type) {
		case CREATE_COURSE:
			return {
				...state,
				course: [...state.course, action.payload],
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
				course: action.payload,
			};
		default:
			return state;
	}
};

export default courseReducer;
