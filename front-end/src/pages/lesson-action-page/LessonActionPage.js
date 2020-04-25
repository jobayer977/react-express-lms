import React, { useEffect } from "react";
import "./lesson-action-page.styles.css";
import CustomTitle from "../../components/custom-title/CustomTitle";
import DashboardLessonList from "../../components/dashboard-lesson-list/DashboardLessonList";
import CreateLesson from "../../components/create-lesson-form/CreateLesson";
import Alert from "../../components/utils/Alert";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const LessonActionPage = ({ courses }) => {
	useEffect(() => {
		window.scrollTo({
			top: "200",
			behavior: "smooth",
		});
	});
	const { courseId } = useParams();
	const filterCourse = courses.find((course) => course._id === courseId);
	return (
		<div className="lesson-action-page">
			<div className="container">
				<CustomTitle
					bold="Lesson List of"
					thin={filterCourse.title}
					tagline="Show all Lesson in this Module"
					medium
				/>
				<div className="row">
					<div className="col-md-6">
						<DashboardLessonList />
					</div>
					<div className="col-md-6">
						<Alert />
						<CreateLesson />
					</div>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	courses: state.course.data,
});

export default connect(mapStateToProps)(LessonActionPage);
