import React from "react";
import "./teachers.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import TeacherCard from "../teacher-card/TeacherCard";

const TeachersSection = () => {
	return (
		<div className="teachers-section">
			<div className="container">
				<CustomTitle bold="Jobayer Hossain" tagline="Contributors profile" />
				<TeacherCard />
			</div>
		</div>
	);
};

export default TeachersSection;
