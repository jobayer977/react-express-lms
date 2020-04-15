import React from "react";
import "./dashboard-module-list.css";
import { Link } from "react-router-dom";

const DashboardModuleList = () => {
	return (
		<div className="module-list-block">
			<ul className="list-group">
				<li className="list-group-item d-flex justify-content-between align-items-center">
					Introduction
					<Link to="/course-lesson-action">
						<span className="badge badge-primary badge-pill">Add Lesson</span>
					</Link>
				</li>
				<li className="list-group-item d-flex justify-content-between align-items-center">
					Introduction
					<Link to="/course-lesson-action">
						<span className="badge badge-primary badge-pill">Add Lesson</span>
					</Link>
				</li>
				<li className="list-group-item d-flex justify-content-between align-items-center">
					Introduction
					<Link to="/course-lesson-action">
						<span className="badge badge-primary badge-pill">Add Lesson</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardModuleList;
