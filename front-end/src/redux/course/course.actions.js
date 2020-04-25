import {
	CREATE_COURSE,
	GET_ALL_COURSE,
	UPDATE_MODULE,
} from "../course/course.types";
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
		dispatch(alertAction(e.message, "danger"));
	}
};
//Create module
export const createModule = (data, id) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ ...data });
	try {
		const res = await axios.put(`/api/course/module/${id}`, body, config);
		dispatch({
			type: UPDATE_MODULE,
			payload: res.data,
		});
		dispatch(alertAction("Module created", "success"));
	} catch (e) {
		dispatch(alertAction(e.message, "danger"));
	}
};
//Create lesson
export const createLesson = (data, courseId, moduleId) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ ...data });
	try {
		const res = await axios.put(
			`/api/course/lesson/${courseId}/${moduleId}`,
			body,
			config
		);
		dispatch({
			type: UPDATE_MODULE,
			payload: res.data,
		});
		dispatch(alertAction("Lesson created", "success"));
	} catch (e) {
		dispatch(alertAction(e.message, "danger"));
	}
};
//Create teacher's note
export const createTeachersNote = (
	data,
	courseId,
	moduleId,
	lessonId
) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ ...data });
	try {
		const res = await axios.put(
			`/api/course/note/${courseId}/${moduleId}/${lessonId}`,
			body,
			config
		);
		dispatch({
			type: UPDATE_MODULE,
			payload: res.data,
		});
		dispatch(alertAction("Teacher's notes created", "success"));
	} catch (e) {
		dispatch(alertAction(e.message, "danger"));
	}
};
