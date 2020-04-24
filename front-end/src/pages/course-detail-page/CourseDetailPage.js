import React, { useEffect } from "react";
import "./course-detail-page.styles.css";
import CourseOverviewBlock from "../../components/course-overview-block/CourseOverviewBlock";
import CourseOutlineBlock from "../../components/course-outline-block/CourseOutlineBlock";
import CourseInfo from "../../components/course-info/CourseInfo";
import CourseAchiveWidget from "../../components/course-achive-widget/CourseAchiveWidget";

const CourseDetailPage = () => {
	useEffect(() => {
		window.scrollTo({
			top: "280",
			behavior: "smooth",
		});
	});
	return (
		<div className="course-detail-page">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="course-overview-side">
							<CourseOverviewBlock />
							<CourseOutlineBlock />
						</div>
					</div>
					<div className="col-md-3">
						<div className="course-detail-sidebar">
							<CourseInfo />
							<CourseAchiveWidget />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetailPage;
