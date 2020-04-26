import React from "react";
import "./course-outline-block.style.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const CourseOutlineBlock = ({ course }) => {
	return (
		<div className="course-outline-block">
			<div className="course-topic-item">
				<Accordion defaultActiveKey="0">
					{course.outline.map((module, i) => (
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
												<i className="fa fa-youtube"></i>
												<span>
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
	);
};

export default CourseOutlineBlock;
