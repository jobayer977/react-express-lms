import React from "react";
import "./course-card-styles.css";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
	const {
		_id,
		author,
		price,
		student,
		review,
		thumbnail,
		title,
		wishlist,
	} = course;
	return (
		<div className="col-md-4 mt-5">
			<div className="course-card">
				<Link to={`/course-detail/${_id}`}>
					<div className="course-item">
						<div className="course-pic">
							<img src={thumbnail} alt="" />
							<div className="course-price">
								<span>{price.toUpperCase()}</span>
							</div>
							<div className="course-details-btn">
								<a href="/">COURSE DETAIL</a>
							</div>
						</div>
						<div className="course-item-text">
							<div className="course-meta">
								<span className="course-category bold-font">Web Design</span>
								<span className="course-author bold-font">{author}</span>
								<div className="course-rate ul-li">
									<ul>
										<li>
											<i className="fas fa-star"></i>
										</li>
										<li>
											<i className="fas fa-star"></i>
										</li>
										<li>
											<i className="fas fa-star"></i>
										</li>
										<li>
											<i className="fas fa-star"></i>
										</li>
										<li>
											<i className="fas fa-star"></i>
										</li>
									</ul>
								</div>
							</div>
							<div className="course-title">
								<h3>
									<Link to="/">{title}</Link>
								</h3>
							</div>
							<div className="course-viewer ul-li">
								<ul>
									<li>
										<i className="fas fa-user"></i> {wishlist.length} Student
									</li>
									<li>
										<i className="fas fa-comment-dots"></i> {review.length}{" "}
										Review
									</li>
									<li>{student.length} Enrolled</li>
								</ul>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default CourseCard;
