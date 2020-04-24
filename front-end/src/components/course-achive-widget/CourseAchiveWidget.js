import React from "react";
import "./course-achive-widget.css";

const CourseAchiveWidget = () => {
	return (
		<div className="course-achieve-widget">
			<h4>
				<strong>Course </strong> achieve
			</h4>
			<ul>
				<li>
					<i className="fa fa-check"></i>Basic Javascript
				</li>
				<li>
					<i className="fa fa-check"></i>React Javascript
				</li>
				<li>
					<i className="fa fa-check"></i>Redux Javascript
				</li>
			</ul>
		</div>
	);
};

export default CourseAchiveWidget;
