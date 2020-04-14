import React from "react";
import { Link } from "react-router-dom";

const DashboardLessonList = () => {
	return (
		<div className="dashboard-lesson-list">
			<ul class="list-group">
				<li class="list-group-item d-flex justify-content-between align-items-center">
					Cras justo odio
					<Link to="/course-lesson-note-update">
						<span class="badge badge-primary badge-pill">Add Note</span>
					</Link>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					Dapibus ac facilisis in
					<Link to="/course-lesson-note-update">
						<span class="badge badge-primary badge-pill">Add Note</span>
					</Link>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					Morbi leo risus
					<Link to="/course-lesson-note-update">
						<span class="badge badge-primary badge-pill">Add Note</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardLessonList;
