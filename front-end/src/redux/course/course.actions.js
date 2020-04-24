import { CREATE_COURSE, GET_ALL_COURSE } from "../course/course.types";
import axios from "axios";
import { alertAction } from "../alert/alertAction";

//Get all course
export const getAllCourse = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/course");
		dispatch({
			type: GET_ALL_COURSE,
			payload: res.data,
		});
	} catch (e) {
		console.log(e.message);
		dispatch(alertAction(e.message, "danger"));
	}
};

//Create course
export const createCourse = ({
	title,
	thumbnail,
	price,
	author,
	description,
}) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({
		title,
		thumbnail,
		price,
		author,
		description,
	});
	try {
		const res = await axios.post("/api/course", body, config);
		dispatch({
			type: CREATE_COURSE,
			payload: res.data,
		});
		dispatch(alertAction("Course created", "success"));
	} catch (e) {
		const errors = e.response.errors;
		if (errors) {
			dispatch(alertAction(errors, "danger"));
		}
	}
};
