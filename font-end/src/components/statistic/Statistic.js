import React from "react";
import "./statistic.style.css";

const Statistic = ({ number, title, danger, warning, primary, success }) => {
	return (
		<div
			className={`${danger ? "st-danger" : ""} 
            ${warning ? "st-warning" : ""} 
            ${primary ? "st-primary" : ""}
            ${success ? "st-success" : ""}
             statistics`}>
			<h1>{number}</h1>
			<p>{title}</p>
		</div>
	);
};

export default Statistic;
