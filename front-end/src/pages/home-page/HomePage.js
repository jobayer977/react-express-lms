import React, { useEffect } from "react";
import "./homepage-styles.css";
import CourseSection from "../../components/courses-section/CourseSection";
import BlogSection from "../../components/blog-section/BlogSection";
import TeachersSection from "../../components/teachers-section/TeachersSection";
import { connect } from "react-redux";
import { PulseLoaderSpinner } from "../../components/utils/Spinner";

const HomePage = ({ course }) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	}, []);
	console.log(course);
	return course.loading ? (
		<PulseLoaderSpinner loading={course.loading} />
	) : (
		<div className="home-page">
			<CourseSection />
			<BlogSection />
			<TeachersSection />
		</div>
	);
};

const mapStateToProps = (state) => ({
	course: state.course,
});

export default connect(mapStateToProps, {})(HomePage);
