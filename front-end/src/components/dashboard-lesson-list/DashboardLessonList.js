import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const DashboardLessonList = ({ courses }) => {
	const { courseId, moduleId } = useParams();
	const findModule = courses
		.find((course) => course._id === courseId)
		.outline.find((module) => module._id === moduleId);
	return (
		<div className="dashboard-lesson-list">
			<ul className="list-group">
				{findModule.lesson.map((lesson, i) => (
					<li
						className="list-group-item d-flex justify-content-between align-items-center"
						key={i}>
						<h4>
							<span>
								{lesson.lessonNo} {lesson.lessonTitle}
							</span>
						</h4>
						<Link
							to={`/course-lesson-note-update/${courseId}/${moduleId}/${lesson._id}`}>
							<span className="badge badge-primary badge-pill">Add Note</span>
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

export default connect(mapStateToProps)(DashboardLessonList);
