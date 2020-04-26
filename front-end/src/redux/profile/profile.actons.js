import { UPDATE_PROFILE, ACTIVE_LESSON } from "./profile.types";
import axios from "axios";
import { alertAction } from "../alert/alertAction";

//Enrolled
export const enrolledCourse = (courseId) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await axios.put(`/api/profile/enrolled/${courseId}`, config);
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});
		dispatch(
			alertAction("Cognates You are now Enrolled in this course", "success")
		);
	} catch (e) {
		const errors = e.response.data.errors;
		if (errors) {
			errors.map((x) => dispatch(alertAction(x.msg, "danger")));
		}
	}
};

//Active Status Update
export const activeStatusUpdate = (courseId, moduleId, lessonId) => async (
	dispatch
) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await axios.put(
			`/api/course/complected/${courseId}/${moduleId}/${lessonId}`,
			config
		);
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});
		dispatch(alertAction("Teacher's notes created", "success"));
	} catch (e) {
		dispatch(alertAction(e.message, "danger"));
	}
};

//ActiveLesson
export const activeLesson = (data, moduleId) => async (dispatch) => {
	dispatch({
		type: ACTIVE_LESSON,
		payload: { ...data, moduleId: moduleId },
	});
};
