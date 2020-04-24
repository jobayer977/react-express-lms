import React from "react";
import "./course-outline-block.style.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const CourseOutlineBlock = () => {
	return (
		<div className="course-outline-block">
			<div className="course-topic-item">
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
	);
};

export default CourseOutlineBlock;
