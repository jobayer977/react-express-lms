import React from "react";
import "./course-info.css";
import CustomButton from "../custom-button/CustomButton";
import { withRouter } from "react-router-dom";
import { enrolledCourse } from "../../redux/profile/profile.actons";
import { connect } from "react-redux";
import Alert from "../utils/Alert";

const CourseInfo = ({ course, enrolledCourse, profile, history }) => {
	const findCourse =
		profile &&
		profile.courses &&
		profile.courses.enrolled.find((x) => x._id === course._id);
	return (
		<div className="course-info-widget">
			<Alert />
			<h1>
				Price <strong>{course.price.toUpperCase()}</strong>
			</h1>
			{findCourse ? (
				<CustomButton
					onClick={(e) => {
						history.push(`/lesson/${course._id}`);
					}}>
					Continue Course
				</CustomButton>
			) : (
				<CustomButton
					onClick={(e) => {
						enrolledCourse(course._id);
					}}>
					Enroll This Course
				</CustomButton>
			)}
			<ul>
				<li>
					<span>Module</span> <span>{course.outline.length} Module</span>
				</li>
				<li>
					<span>Language</span> <span>Bangla</span>
				</li>
				<li>
					<span>Includes</span> <span>Source Code</span>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.data,
});

export default withRouter(
	connect(mapStateToProps, { enrolledCourse })(CourseInfo)
);
