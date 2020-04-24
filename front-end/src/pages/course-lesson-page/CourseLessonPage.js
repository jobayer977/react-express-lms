import React, { useEffect } from "react";
import "./course-lesson-page-styles.css";
import CourseLessonBlock from "../../components/course-lesson-block/CourseLessonBlock";
import LessonVideoBlock from "../../components/lesson-video-block/LessonVideoBlock";

const CourseLessonPage = () => {
	useEffect(() => {
		window.scrollTo({
			top: "200",
			behavior: "smooth",
		});
	});
	return (
		<div className="course-lesson-page">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<CourseLessonBlock />
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

export default CourseLessonPage;
