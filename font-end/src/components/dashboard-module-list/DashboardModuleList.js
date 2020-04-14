import React from "react";
import "./dashboard-module-list.css";
import CustomTitle from "../custom-title/CustomTitle";
import { Link } from "react-router-dom";

const DashboardModuleList = () => {
	return (
		<div className="module-list-block">
			<ul class="list-group">
				<li class="list-group-item d-flex justify-content-between align-items-center">
					Introduction
					<Link to="/course-lesson-action">
						<span class="badge badge-primary badge-pill">Add Lesson</span>
					</Link>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					Introduction
					<Link to="/course-lesson-action">
						<span class="badge badge-primary badge-pill">Add Lesson</span>
					</Link>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					Introduction
					<Link to="/course-lesson-action">
						<span class="badge badge-primary badge-pill">Add Lesson</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardModuleList;
