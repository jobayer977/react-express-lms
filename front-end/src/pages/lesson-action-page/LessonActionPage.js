import React from "react";
import "./lesson-action-page.styles.css";
import CustomTitle from "../../components/custom-title/CustomTitle";
import DashboardLessonList from "../../components/dashboard-lesson-list/DashboardLessonList";
import CreateLesson from "../../components/create-lesson-form/CreateLesson";

const LessonActionPage = () => {
	return (
		<div className="lesson-action-page">
			<div className="container">
				<CustomTitle
					bold="Lesson List of"
					thin="Basic Redux into"
					tagline="Show all Lesson in this Module"
					medium
				/>
				<div className="row">
					<div className="col-md-6">
						<DashboardLessonList />
					</div>
					<div className="col-md-6">
						<CreateLesson />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LessonActionPage;
