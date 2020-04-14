import React from "react";
import "./blog-section.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import BlogCard from "../blog-card/BlogCard";

const BlogSection = () => {
	return (
		<section className="blog-section">
			<div className="container">
				<CustomTitle tagline="LEARN NEW SKILLS" bold="Recent" thin="Blog" />
				<BlogCard />
			</div>
		</section>
	);
};

export default BlogSection;
