import React from "react";
import "./course-lesson-block.styles.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const CourseLessonBlock = () => {
	return (
		<div className="course-lesson-block">
			<h1>
				<i className="fa fa-book"></i> Lesson List
			</h1>
			<div className="course-lesson-list">
				<div className="course-lesson-item">
					<Accordion defaultActiveKey="0">
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="0">
								<span>
									<strong>01</strong>React Redux Javascript
								</span>
								{/* <i className="fas fa-angle-down rotate-icon"></i> */}
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									<ul>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="1">
								<span>
									<strong>02</strong>React Redux Javascript
								</span>
								{/* <i className="fas fa-angle-down rotate-icon"></i> */}
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body>
									<ul>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
										<li>
											<i className="fa fa-youtube"></i>
											<span>
												React JS Bangla tutorial | EventHandeling,
												ReactDeveloperTools | Class # 5
											</span>
										</li>
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default CourseLessonBlock;
