import React from "react";
import "./blog-card.styles.css";
import { Link } from "react-router-dom";

const BlogCard = () => {
	return (
		<div className="row pt-5">
			<div className="col-md-3">
				<div className="blog-card">
					<div className="best-course-pic-text">
						<div className="best-course-pic">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/course/bc-2.jpg"
								alt=""
							/>
							<div className=" blog-cat">
								<span>Redux</span>
							</div>
						</div>
						<div className="blog-text">
							<div className="blog-title">
								<Link to="/">
									Fully Responsive Web Design &amp; Development.
								</Link>
							</div>
						</div>
						<div className="course-meta">
							<span className="course-category">Medium</span>
							<span className="course-author">250 Claps</span>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3">
				<div className="blog-card">
					<div className="best-course-pic-text">
						<div className="best-course-pic">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/course/bc-2.jpg"
								alt=""
							/>
							<div className=" blog-cat">
								<span>Redux</span>
							</div>
						</div>
						<div className="blog-text">
							<div className="blog-title">
								<Link to="/">
									Fully Responsive Web Design &amp; Development.
								</Link>
							</div>
						</div>
						<div className="course-meta">
							<span className="course-category">Medium</span>
							<span className="course-author">250 Claps</span>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3">
				<div className="blog-card">
					<div className="best-course-pic-text">
						<div className="best-course-pic">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/course/bc-2.jpg"
								alt=""
							/>
							<div className=" blog-cat">
								<span>Redux</span>
							</div>
						</div>
						<div className="blog-text">
							<div className="blog-title">
								<Link to="/">
									Fully Responsive Web Design &amp; Development.
								</Link>
							</div>
						</div>
						<div className="course-meta">
							<span className="course-category">Medium</span>
							<span className="course-author">250 Claps</span>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3">
				<div className="blog-card">
					<div className="best-course-pic-text">
						<div className="best-course-pic">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/course/bc-2.jpg"
								alt=""
							/>
							<div className=" blog-cat">
								<span>Redux</span>
							</div>
						</div>
						<div className="blog-text">
							<div className="blog-title">
								<Link to="/">
									Fully Responsive Web Design &amp; Development.
								</Link>
							</div>
						</div>
						<div className="course-meta">
							<span className="course-category">Medium</span>
							<span className="course-author">250 Claps</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
