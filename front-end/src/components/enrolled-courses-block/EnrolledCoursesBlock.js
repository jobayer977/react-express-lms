import React from "react";
import "./enrolled-courses-block.css";
import CustomTitle from "../custom-title/CustomTitle";
import CourseCard from "../course-card/CourseCard";
import { connect } from "react-redux";

const EnrolledCoursesBlock = ({ profile }) => {
	return (
		<div className="enrolled-courses-block">
			<CustomTitle
				thin="Enrolled Courses"
				tagline="Enrolled courses list"
				medium
			/>
			<div className="enrolled-courses-list">
				<div className="row">
					{profile.courses.enrolled.map((course, i) => (
						<CourseCard key={i} course={course} />
					))}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.data,
});

export default connect(mapStateToProps, {})(EnrolledCoursesBlock);
