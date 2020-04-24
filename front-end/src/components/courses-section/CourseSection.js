import React from "react";
import "./courses-section.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import CourseCard from "../course-card/CourseCard";

const CourseSection = () => {
	return (
		<section className="popular-courses-block">
			<div className="container">
				<div className="popular-courses-block-content">
					<CustomTitle
						tagline="LEARN NEW SKILLS"
						bold="Popular"
						thin="Courses"
					/>
					<div className="popular-course-cards">
						<CourseCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseSection;
