import React from "react";
import "./courses-section.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import CourseCard from "../course-card/CourseCard";
import { connect } from "react-redux";

const CourseSection = ({ courses }) => {
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
						<div className="row">
							{courses.map((course, i) => (
								<CourseCard course={course} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	courses: state.course.data,
});

export default connect(mapStateToProps)(CourseSection);
