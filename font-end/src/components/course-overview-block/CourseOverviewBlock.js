import React from "react";
import "./course-overview-block.styles.css";

const CourseOverviewBlock = () => {
	return (
		<div className="course-overview">
			<div className="course-overview-thumbnail">
				<img
					src="http://jthemes.org/html/genius-course/assets/img/course/cs-1.jpg"
					alt=""
				/>
			</div>
			<div className="course-overview-content">
				<div className="course-overview-meta">
					<p>
						by - <strong>Jobayer Hossain</strong>
					</p>
					<p>
						Course Level - <strong>Intermediate</strong>
					</p>
				</div>
				<h1>React Redux Complete course</h1>
				<p className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim
					suscipit sint architecto id consequatur vitae cum aperiam provident
					odio fugiat blanditiis dolore quia quidem exercitationem rerum,
					corporis possimus harum!
				</p>
			</div>
		</div>
	);
};

export default CourseOverviewBlock;
