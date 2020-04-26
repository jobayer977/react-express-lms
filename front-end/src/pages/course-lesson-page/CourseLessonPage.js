import React, { useEffect } from "react";
import "./course-lesson-page-styles.css";
import CourseLessonBlock from "../../components/course-lesson-block/CourseLessonBlock";
import LessonVideoBlock from "../../components/lesson-video-block/LessonVideoBlock";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const CourseLessonPage = ({ enrolledCourse }) => {
	useEffect(() => {
		window.scrollTo({
			top: "200",
			behavior: "smooth",
		});
	});

	//Find course
	const { courseId } = useParams();
	const course =
		enrolledCourse &&
		enrolledCourse.courses &&
		enrolledCourse.courses.enrolled.find((x) => x._id === courseId);
	return (
		<div className="course-lesson-page">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<CourseLessonBlock course={course} />
					</div>
					<div className="col-md-8">
						<div className="vide-block">
							<LessonVideoBlock />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	enrolledCourse: state.profile.data,
});
export default connect(mapStateToProps)(CourseLessonPage);
