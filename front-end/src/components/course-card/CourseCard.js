import React from "react";
import "./course-card-styles.css";

const CourseCard = () => {
	return (
		<div className="row">
			<div className="col-md-4">
				<div className="course-card">
					<div className="course-item">
						<div className="course-pic">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/course/c-1.jpg"
								alt=""
							/>
							<div className="course-price">
								<span>free</span>
							</div>
							<div className="course-details-btn">
								<a href="/">COURSE DETAIL</a>
							</div>
						</div>
						<div className="course-item-text">
							<div className="course-meta">
								<span className="course-category bold-font">Web Design</span>
								<span className="course-author bold-font">Jobayer Hossain</span>
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
									<a href="/">
										Introduction to Mobile Application Development.
									</a>
								</h3>
							</div>
							<div className="course-viewer ul-li">
								<ul>
									<li>
										<i className="fas fa-user"></i> 1.220
									</li>
									<li>
										<i className="fas fa-comment-dots"></i> 1.015
									</li>
									<li>125k Unrolled</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="course-card">
					<div className="course-item">
						<div className="course-pic">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/course/c-1.jpg"
								alt=""
							/>
							<div className="course-price">
								<span>$99.00</span>
							</div>
							<div className="course-details-btn">
								<a href="/">COURSE DETAIL</a>
							</div>
						</div>
						<div className="course-item-text">
							<div className="course-meta">
								<span className="course-category bold-font">Web Design</span>
								<span className="course-author bold-font">
									John Luis Fernandes
								</span>
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
									<a href="/">
										Introduction to Mobile Application Development.
									</a>
								</h3>
							</div>
							<div className="course-viewer ul-li">
								<ul>
									<li>
										<i className="fas fa-user"></i> 1.220
									</li>
									<li>
										<i className="fas fa-comment-dots"></i> 1.015
									</li>
									<li>125k Unrolled</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="course-card">
					<div className="course-item">
						<div className="course-pic">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/course/c-1.jpg"
								alt=""
							/>
							<div className="course-price">
								<span>$99.00</span>
							</div>
						</div>
						<div className="course-item-text">
							<div className="course-meta">
								<span className="course-category bold-font">Web Design</span>
								<span className="course-author bold-font">
									John Luis Fernandes
								</span>
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
									<a href="/">
										Introduction to Mobile Application Development.
									</a>
								</h3>
							</div>
							<div className="course-viewer ul-li">
								<ul>
									<li>
										<i className="fas fa-user"></i> 1.220
									</li>
									<li>
										<i className="fas fa-comment-dots"></i> 1.015
									</li>
									<li>125k Unrolled</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
