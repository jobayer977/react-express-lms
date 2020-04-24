import React from "react";
import "./lesson-video-block.styles.css";
import CustomButton from "../custom-button/CustomButton";
import { Link } from "react-router-dom";

const LessonVideoBlock = () => {
	return (
		<div className="lesson-video-block">
			<div className="video-meta-action">
				<h4>React redux mapstate to despatch</h4>

				<Link to="/student-dashboard">
					<CustomButton>Complected</CustomButton>
				</Link>
			</div>
			<div className="video-preview">
				<iframe
					title="wrfsd"
					key="132"
					width="983"
					height="553"
					src="https://www.youtube.com/embed/xAjfBUv42mY"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
			</div>
			<div className="video-controller">
				<CustomButton>Prev unit</CustomButton>
				<CustomButton>Next unit</CustomButton>
			</div>
		</div>
	);
};

export default LessonVideoBlock;
