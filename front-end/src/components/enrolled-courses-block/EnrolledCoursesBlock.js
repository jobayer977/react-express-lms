import React from "react";
import "./enrolled-courses-block.css";
import CustomTitle from "../custom-title/CustomTitle";
import CourseCard from "../course-card/CourseCard";

const EnrolledCoursesBlock = () => {
	return (
		<div className="enrolled-courses-block">
			<CustomTitle
				thin="Enrolled Courses"
				tagline="Enrolled courses list"
				medium
			/>
			<div className="enrolled-courses-list">
				<CourseCard />
			</div>
		</div>
	);
};

export default EnrolledCoursesBlock;
