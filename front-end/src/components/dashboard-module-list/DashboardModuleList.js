import React from "react";
import "./dashboard-module-list.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const DashboardModuleList = ({ courses }) => {
	const { courseId } = useParams();
	const filterCourse = courses.find((course) => course._id === courseId);
	return (
		<div className="module-list-block">
			<ul className="list-group">
				{filterCourse.outline.map((module, i) => (
					<li
						className="list-group-item d-flex justify-content-between align-items-center"
						key={i}>
						<h4>
							<span>{module.moduleNo}</span> {module.moduleTitle}
						</h4>
						<Link to={`/course-lesson-action/${courseId}/${module._id}`}>
							<span className="badge badge-primary badge-pill">Add Lesson</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	courses: state.course.data,
});

export default connect(mapStateToProps)(DashboardModuleList);
