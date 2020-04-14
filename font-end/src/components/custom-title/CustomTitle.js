import React from "react";
import "./custom-title.style.css";

const CustomTitle = ({ thin, bold, tagline, medium }) => {
	return (
		<div className={`${medium ? "medium-size" : ""} section-title`}>
			<span className="subtitle">{tagline}</span>
			<h2>
				<span>{bold}</span> {thin}.
			</h2>
		</div>
	);
};

export default CustomTitle;
