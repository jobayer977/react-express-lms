import React from "react";
import "./course-lesson-block.styles.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { activeLesson } from "../../redux/profile/profile.actons";
import { connect } from "react-redux";

const CourseLessonBlock = ({ course, activeLesson, profile }) => {
	console.log(course);

	return (
		<div className="course-lesson-block">
			<h1>
				<i className="fa fa-book"></i> Lesson List
			</h1>
			<div className="course-lesson-list">
				<div className="course-lesson-item">
					<Accordion defaultActiveKey="0">
						{course &&
							course.outline.map((module, i) => (
								<Card key={i}>
									<Accordion.Toggle as={Card.Header} eventKey={i + 1}>
										<span>
											<strong>{module.moduleNo}</strong> {module.moduleTitle}
										</span>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey={i + 1}>
										<Card.Body>
											<ul>
												{module.lesson.map((x, i) => (
													<li key={i}>
														{x.status === true ? (
															<i class="fas fa-check-circle"></i>
														) : (
															<i className="fa fa-youtube"></i>
														)}

														<span onClick={(e) => activeLesson(x, module._id)}>
															{x.lessonNo} {x.lessonTitle}
														</span>
													</li>
												))}
											</ul>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.data,
});

export default connect(mapStateToProps, { activeLesson })(CourseLessonBlock);
