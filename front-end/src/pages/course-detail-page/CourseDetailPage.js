import React, { useEffect } from "react";
import "./course-detail-page.styles.css";
import CourseOverviewBlock from "../../components/course-overview-block/CourseOverviewBlock";
import CourseOutlineBlock from "../../components/course-outline-block/CourseOutlineBlock";
import CourseInfo from "../../components/course-info/CourseInfo";
import CourseAchiveWidget from "../../components/course-achive-widget/CourseAchiveWidget";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Alert from "../../components/utils/Alert";

const CourseDetailPage = ({ courses }) => {
	useEffect(() => {
		window.scrollTo({
			top: "280",
			behavior: "smooth",
		});
	});
	//Find Course
	const { courseId } = useParams();
	const course = courses.find((course) => course._id === courseId);
	return (
		<div className="course-detail-page">
			<div className="container">
				<Alert />
				<div className="row">
					<div className="col-md-9">
						<div className="course-overview-side">
							<CourseOverviewBlock course={course} />
							<CourseOutlineBlock course={course} />
						</div>
					</div>
					<div className="col-md-3">
						<div className="course-detail-sidebar">
							<CourseInfo course={course} />
							<CourseAchiveWidget course={course} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	courses: state.course.data,
});

export default connect(mapStateToProps)(CourseDetailPage);
