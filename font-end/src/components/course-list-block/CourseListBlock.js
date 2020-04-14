import React from "react";
import "./course-list-block.styles.css";
import CourseListTable from "../course-list-table/CourseListTable";

const CourseListBlock = () => {
	return (
		<div className="course-list">
			<CourseListTable />
		</div>
	);
};

export default CourseListBlock;
