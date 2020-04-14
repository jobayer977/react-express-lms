import React from "react";
import "./course-info.css";
import CustomButton from "../custom-button/CustomButton";
import { Link } from "react-router-dom";

const CourseInfo = () => {
	return (
		<div className="course-info-widget">
			<h1>
				Price <strong>FREE</strong>
			</h1>
			<Link to="/lesson">
				<CustomButton>Enroll This Course</CustomButton>
			</Link>
			<ul>
				<li>
					<span>Lectures</span> <span>20 Lectures</span>
				</li>
				<li>
					<span>Language</span> <span>Bangla</span>
				</li>
				<li>
					<span>Video</span> <span>8 Hours</span>
				</li>
				<li>
					<span>Duration</span> <span>30 Days</span>
				</li>
				<li>
					<span>Includes</span> <span>Source Code</span>
				</li>
			</ul>
		</div>
	);
};

export default CourseInfo;
