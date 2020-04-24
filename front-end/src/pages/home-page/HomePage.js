import React, { useEffect } from "react";
import "./homepage-styles.css";
import CourseSection from "../../components/courses-section/CourseSection";
import BlogSection from "../../components/blog-section/BlogSection";
import TeachersSection from "../../components/teachers-section/TeachersSection";

const HomePage = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	}, []);
	return (
		<div className="home-page">
			<CourseSection />
			<BlogSection />
			<TeachersSection />
		</div>
	);
};

export default HomePage;
