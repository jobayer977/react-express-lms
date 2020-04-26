import React from "react";
import "./course-overview-block.styles.css";

const CourseOverviewBlock = ({ course }) => {
	const { thumbnail, author, title, description } = course;
	return (
		<div className="course-overview">
			<div className="course-overview-thumbnail">
				<img src={thumbnail} alt={title} />
			</div>
			<div className="course-overview-content">
				<div className="course-overview-meta">
					<p>
						by - <strong>{author}</strong>
					</p>
					<p>
						Course Level - <strong>Intermediate</strong>
					</p>
				</div>
				<h1>{title}</h1>
				<p className="description">{description}</p>
			</div>
		</div>
	);
};

export default CourseOverviewBlock;
