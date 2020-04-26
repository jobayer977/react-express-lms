import React from "react";
import "./teacher-card.styles.css";
import { Link } from "react-router-dom";

const TeacherCard = () => {
	return (
		<div className="row">
			<div className="col-md-12 text-center">
				<div className="teacher-card">
					<div className="teacher-avater">
						<img src="https://i.ibb.co/8cXT1ZL/IMG-2796.jpg" alt="" />
						<div className="dark-overlay"></div>
						<div className="hover-content">
							<div className="teacher-link">
								<Link to="https://www.fb.com/jobayerdev" target="_blank">
									<i className="fa fa-facebook"></i>
								</Link>
								<Link to="https://www.twitter.com/jobayerdev" target="_blank">
									<i className="fa fa-twitter"></i>
								</Link>
								<Link to="https://www.github.com/jobayerdev" target="_blank">
									<i className="fa fa-github"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="teacher-meta">
						<p>Front-End Developer</p>
						<h4>
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
							distinctio. Autem sequi pariatur magnam ratione illum alias vel
							dicta tempora."
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherCard;
